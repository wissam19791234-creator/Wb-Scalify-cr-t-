import type { ReactNode } from 'react';

type SplineOrFallbackProps = {
  sceneUrl?: string;
  communityUrl: string;
  fallback: ReactNode;
};

export const SplineOrFallback = ({ sceneUrl, communityUrl, fallback }: SplineOrFallbackProps) => {
  const canEmbedScene = Boolean(sceneUrl && sceneUrl.includes('.splinecode'));

  if (canEmbedScene) {
    return (
      <iframe
        title="Spline scene"
        src={sceneUrl}
        className="h-[520px] w-full rounded-3xl border border-white/10"
        loading="lazy"
      />
    );
  }

  return (
    <div>
      {fallback}
      <a className="mt-4 inline-block text-sm text-cyan hover:text-purple" href={communityUrl} target="_blank" rel="noreferrer">
        Voir la scène Spline
      </a>
    </div>
  );
};
