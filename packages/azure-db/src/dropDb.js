const execa = require("execa");

const {
  dropDbJob,
} = require("@socialgouv/kosko-charts/components/azure-pg/drop-db.job");

const getRandomInt = () => parseInt(Math.random() * 100000, 10);

async function dropDb({ cluster, namespace, database, user }) {
  const job = dropDbJob({
    database,
    user,
  });
  job.metadata.name = `sre-tools-drop-db-job-${getRandomInt()}`;
  job.metadata.namespace = namespace;

  const env = {};
  const kubeArgs = ["--context", cluster, "apply", "-f", "-"];
  const { stdout } = await execa("kubectl", kubeArgs, {
    input: JSON.stringify(job),
    env,
  }).catch(console.log);
  console.log("stdout", stdout);
  return job;
  // todo: wait for job and get stdout
}

module.exports = { dropDb };
