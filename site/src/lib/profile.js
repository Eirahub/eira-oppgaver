// The site profile: name, logo, colours, links and texts that make the site Eira's or LKK's.
// Each profile is plain data in site/profiles/<name>/ (profile.yml, om.md, public/).
// Pick one with SITE_PROFILE=<name> (default eira). Paths assume Astro runs from site/.
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

export const PROFILE_NAME = process.env.SITE_PROFILE || 'eira';
export const PROFILE_DIR = path.resolve(process.cwd(), 'profiles', PROFILE_NAME);

const file = path.join(PROFILE_DIR, 'profile.yml');
if (!fs.existsSync(file)) throw new Error(`Fant ikke profilen "${PROFILE_NAME}": ${file} mangler.`);
const profile = YAML.parse(fs.readFileSync(file, 'utf8'));
for (const key of ['name', 'url', 'repo', 'branch', 'tokens']) {
  if (!profile[key]) throw new Error(`Profilen "${PROFILE_NAME}" mangler "${key}" i profile.yml.`);
}

profile.about = fs.readFileSync(path.join(PROFILE_DIR, 'om.md'), 'utf8');
profile.editBase = `https://github.com/${profile.repo}/edit/${profile.branch}/src`;
profile.blobBase = `https://github.com/${profile.repo}/blob/${profile.branch}/src`;
profile.issueUrl = `https://github.com/${profile.repo}/issues/new`;
profile.partners ??= [];

export default profile;
