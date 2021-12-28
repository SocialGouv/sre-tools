const execa = require("execa");

const {
  createDbJob,
} = require("@socialgouv/kosko-charts/components/azure-pg/create-db.job");

const getRandomInt = () => parseInt(Math.random() * 100000, 10);

async function createDb({
  cluster,
  namespace,
  database,
  user,
  password,
  secretRefName,
  dryRun = false,
}) {
  const job = createDbJob({
    database,
    user,
    password,
    secretRefName,
  });
  if (!job.metadata) {
    job.metadata = {};
  }
  job.metadata.name = `sre-tools-create-db-job-${getRandomInt()}`;
  job.metadata.namespace = namespace;

  const env = {};
  const kubeArgs = ["--context", cluster, "apply", "-f", "-"];
  if (!dryRun) {
    const { stdout } = await execa("kubectl", kubeArgs, {
      input: JSON.stringify(job),
      env,
    }).catch(console.log);
    console.log("stdout", stdout);
  } else {
    console.log(`dry run: kubectl ${kubeArgs.join(" ")}`);
  }

  return job;
  // todo: wait for job and get stdout
}

module.exports = { createDb };
