const execa = require("execa");

const {
  dropAutodevopsDbsJob,
} = require("@socialgouv/kosko-charts/components/azure-pg/drop-autodevops-dbs.job");

const getRandomInt = () => parseInt(Math.random() * 100000, 10);

async function dropAutodevopsDbs({
  cluster,
  namespace,
  database,
  user,
  password,
}) {
  const job = dropAutodevopsDbsJob();
  job.metadata.name = `sre-tools-drop-dbs-job-${getRandomInt()}`;
  job.metadata.namespace = namespace;
  const env = {};
  const kubeArgs = ["--context", cluster, "apply", "-f", "-"];
  const { stdout } = await execa("kubectl", kubeArgs, {
    input: JSON.stringify(job),
    env,
  }).catch(console.log);
  return job;
  // todo: wait for job and get stdout
}

module.exports = { dropAutodevopsDbs };
