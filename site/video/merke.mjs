// Farger, skrift og sluttbilde per profil. Velg med SITE_PROFILE (som nettsiden), standard eira.
export const PROFIL = process.env.SITE_PROFILE || 'eira';

const PROFILER = {
  // palett A "Fjord & Ember"
  eira: {
    canvas: '#F5F2ED', ink: '#1B1B1F', ink2: '#3D3D42', primary: '#1E3A8A', accent: '#FF8A4C', accentInk: '#4A1A00',
    display: '"Baloo 2", sans-serif', shadow: 'rgba(30,58,138,', lockup: true,
    mark: 'eira', kicker: 'Ryfylke · Kodeklubb', url: 'eirahub.no',
  },
  // farger fra profiles/lkk/profile.yml; LKK bruker Helvetica/Arial, nærmest er Inter
  lkk: {
    canvas: '#F2F2F2', ink: '#333333', ink2: '#444444', primary: '#087A50', accent: '#0FBE7C', accentInk: '#00331F',
    display: '"Inter", sans-serif', shadow: 'rgba(0,0,0,', lockup: false, // LKK-logoen har kidsakoder.no i seg
  },
};
if (!PROFILER[PROFIL]) throw new Error(`Ukjent profil for video: ${PROFIL}`);
export const B = PROFILER[PROFIL];
// filnavn: scratch.mp4 for eira, scratch-lkk.mp4 for andre profiler
export const SUF = PROFIL === 'eira' ? '' : `-${PROFIL}`;
