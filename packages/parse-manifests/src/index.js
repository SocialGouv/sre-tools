import YAML from "yaml";

const isRedirectIngress = (ingress) =>
  "nginx.ingress.kubernetes.io/permanent-redirect" in
  ingress.metadata.annotations;

/** extract hostnames from a set of ingresses */
const getHosts = (manifests) => {
  const ingresses = manifests
    .filter((m) => m.kind === "Ingress")
    .filter((m) => !isRedirectIngress(m));
  const hosts = ingresses.flatMap((ing) => ing.spec.rules.map((r) => r.host));
  return hosts;
};

/** extract redirects from a set of ingresses */
const getRedirects = (manifests) => {
  const ingresses = manifests
    .filter((m) => m.kind === "Ingress")
    .filter(isRedirectIngress);
  const hosts = ingresses.flatMap((ing) =>
    ing.spec.rules.map((r) => ({
      from: r.host,
      to: ing.metadata.annotations[
        "nginx.ingress.kubernetes.io/permanent-redirect"
      ],
    }))
  );
  return hosts;
};

const getNamespace = (manifests) => {
  return manifests.filter((m) => m.kind !== "Namespace")[0].metadata.namespace;
};

/** extract some annotation from first deployment */
const getDeploymentAnnotation = (manifests, annotation) => {
  const deployments = manifests.filter((m) => m.kind === "Deployment");
  if (deployments.length) {
    return (
      deployments[0].metadata &&
      deployments[0].metadata.annotations &&
      deployments[0].metadata.annotations[annotation]
    );
  }
};

/** extract all images from :
 *  - deployments containers
 *  - deployments initContainers
 *  - TODO: jobs containers
 *  - TODO: jobs initContainers
 * */
const getImages = (manifests) => {
  const deployments = manifests.filter((m) => m.kind === "Deployment");
  if (deployments.length) {
    const images = deployments.flatMap((deploy) => [
      ...deploy.spec.template.spec.containers.map(
        (container) => container.image
      ),
      ...((deploy.spec.template.spec.initContainers &&
        deploy.spec.template.spec.initContainers.map(
          (container) => container.image
        )) ||
        []),
    ]);
    return Array.from(new Set(images)).sort();
  }
};

/** minify manifest definition */
const getResume = (manifests) =>
  manifests.map((manifest) => ({
    kind: manifest.kind,
    name: manifest.metadata.name,
    namespace: manifest.metadata.namespace,
  }));

/** assume isProduction when using production ssl annotation */
const isProduction = (manifests) => {
  const ingresses = manifests.filter((m) => m.kind === "Ingress");
  return !!ingresses.filter(
    (ing) =>
      ing.metadata.annotations &&
      ing.metadata.annotations["certmanager.k8s.io/cluster-issuer"] ===
        "letsencrypt-prod"
  ).length;
};

/** parse a bunch of yaml manifests */
const parseManifests = (yaml) => {
  const options = { prettyErrors: true };
  const manifests = YAML.parseAllDocuments(yaml, options)
    .map((doc) => doc.toJSON())
    .filter(Boolean);
  const result = {
    isProduction: isProduction(manifests),
    manifests: getResume(manifests),
    hosts: getHosts(manifests),
    redirects: getRedirects(manifests),
    images: getImages(manifests),
    namespace: getNamespace(manifests),
    "app.github.com/run": getDeploymentAnnotation(
      manifests,
      "app.github.com/run"
    ),
    "app.github.com/repo": getDeploymentAnnotation(
      manifests,
      "app.github.com/repo"
    ),
  };
  return result;
};

export default parseManifests;
