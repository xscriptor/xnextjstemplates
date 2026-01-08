'use client';

import { Hero } from '@/components/sections/Hero';
import { FeaturedPlaylists } from '@/components/sections/FeaturedPlaylists';
import { TrendingTracks } from '@/components/sections/TrendingTracks';
import { NewReleases } from '@/components/sections/NewReleases';
import { ArtistSpotlight } from '@/components/sections/ArtistSpotlight';
import { TopCharts } from '@/components/sections/TopCharts';
import { RadioChannels } from '@/components/sections/RadioChannels';
import { EventsBanner } from '@/components/sections/EventsBanner';
import { Newsletter } from '@/components/sections/Newsletter';
import { Footer } from '@/components/ui/Footer';

export default function HomeEn() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-4">
        <NewReleases />
        <ArtistSpotlight />
        <TopCharts />
        <FeaturedPlaylists />
        <RadioChannels />
        <EventsBanner />
        <TrendingTracks />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
