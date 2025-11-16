import { useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import { portfolioContent } from "@/lib/content";

export default function SocialPage() {
  const twitterRef = useRef<HTMLDivElement | null>(null);
  const twitterHandle = (portfolioContent as any).social?.twitter || "";
  const linkedinPosts: string[] = (portfolioContent as any).social?.linkedinPosts || [];

  useEffect(() => {
    if (!twitterHandle || !twitterRef.current) return;

    // Inject Twitter widgets script if not present and render timeline
    const scriptId = "twitter-wjs";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

    const renderTimeline = () => {
      try {
        // @ts-ignore - global injected by Twitter script
        if (window.twttr && window.twttr.widgets) {
          // Clear previous embeds (if navigating back/forth)
          if (twitterRef.current) twitterRef.current.innerHTML = "";
          // Create timeline
          // @ts-ignore
          window.twttr.widgets.createTimeline(
            {
              sourceType: "profile",
              screenName: twitterHandle.replace("@", ""),
            },
            twitterRef.current,
            {
              height: 600,
              theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
            }
          );
        }
      } catch (e) {
        // No-op if widget fails
      }
    };

    if (existing) {
      renderTimeline();
    } else {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.onload = renderTimeline;
      document.body.appendChild(s);
    }
  }, [twitterHandle]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-28 pb-20">
        <section id="social" className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">
              <span className="cyber-text">Social</span> Feed
            </h1>
            <p className="text-muted-foreground mt-2">Latest from Twitter and LinkedIn</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard className="slide-up">
              <h2 className="text-xl font-semibold mb-4">Twitter</h2>
              {twitterHandle ? (
                <div ref={twitterRef} className="min-h-[200px]" />
              ) : (
                <p className="text-muted-foreground">
                  Add your Twitter handle in <code>src/lib/content.ts</code> at <code>social.twitter</code> to show your timeline.
                </p>
              )}
            </GlassCard>

            <GlassCard className="slide-up">
              <h2 className="text-xl font-semibold mb-4">LinkedIn</h2>
              {linkedinPosts && linkedinPosts.length > 0 ? (
                <div className="space-y-4">
                  {linkedinPosts.map((embedUrl) => (
                    <div key={embedUrl} className="w-full">
                      <iframe
                        src={embedUrl}
                        height="600"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen
                        title="LinkedIn Post"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Add LinkedIn embed URLs in <code>src/lib/content.ts</code> at <code>social.linkedinPosts</code>.
                  Use URLs like <code>https://www.linkedin.com/embed/feed/update/urn:li:activity:ID</code> or <code>urn:li:ugcPost:ID</code>.
                </p>
              )}
            </GlassCard>
          </div>
        </section>
      </main>
    </div>
  );
}
