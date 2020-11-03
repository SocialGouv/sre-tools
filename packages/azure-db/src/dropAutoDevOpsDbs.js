const execa = require("execa");

const {
  dropDbsJob,
} = require("@socialgouv/kosko-charts/components/azure-pg/drop-dbs.job");

const getRandomInt = () => parseInt(Math.random() * 100000, 10);

async function dropAutoDevOpsDbs({ cluster, namespace, database, user, password }) {
  const job = dropAutoDevOpsDbsJob();
  job.metadata.name = `sre-tools-drop-dbs-job-${getRandomInt()}`;
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

module.exports = { dropAutoDevOpsDbs };



psql < <( psql -Atc "select 'drop database \"'||datname||'\";' from pg_database where datistemplate=false AND (datname like \"db_%\" or datname like \"autodevops_%\");")