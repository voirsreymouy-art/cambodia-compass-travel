'use client';

import { useMemo, useState } from 'react';
import { Tour } from '@/data/site';
import TourCard from '@/components/TourCard';

export default function ToursExplorer({ tours }: { tours: Tour[] }) {
  const [search, setSearch] = useState('');
  const [destination, setDestination] = useState('All destinations');
  const [duration, setDuration] = useState('Any');
  const [category, setCategory] = useState('All categories');
  const [priceRange, setPriceRange] = useState('Any budget');
  const [sort, setSort] = useState('popular');

  const destinationOptions = ['All destinations', ...new Set(tours.map((tour) => tour.destination))];
  const categoryOptions = ['All categories', ...new Set(tours.map((tour) => tour.category))];

  const filteredTours = useMemo(() => {
    const filtered = tours.filter((tour) => {
      const matchesSearch = tour.title.toLowerCase().includes(search.toLowerCase()) || tour.destination.toLowerCase().includes(search.toLowerCase());
      const matchesDestination = destination === 'All destinations' || tour.destination === destination;
      const matchesCategory = category === 'All categories' || tour.category === category;
      const matchesDuration =
        duration === 'Any' ||
        (duration === 'Half-day' && tour.duration < 1) ||
        (duration === '1-2 days' && tour.duration >= 1 && tour.duration <= 2) ||
        (duration === '3+ days' && tour.duration >= 3);
      const matchesPrice =
        priceRange === 'Any budget' ||
        (priceRange === 'Under $100' && tour.price < 100) ||
        (priceRange === '$100-$180' && tour.price >= 100 && tour.price <= 180) ||
        (priceRange === '$180+' && tour.price > 180);

      return matchesSearch && matchesDestination && matchesCategory && matchesDuration && matchesPrice;
    });

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'duration') return a.duration - b.duration;
      return b.rating - a.rating;
    });
  }, [search, destination, duration, category, priceRange, sort, tours]);

  return (
    <section className="section container">
      <div className="page-header">
        <div>
          <p className="eyebrow text-accent">Curated experiences</p>
          <h1>Journeys worth taking</h1>
        </div>
      </div>

      <div className="filter-panel">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by destination or tour name"
        />

        <select value={destination} onChange={(event) => setDestination(event.target.value)}>
          {destinationOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select value={duration} onChange={(event) => setDuration(event.target.value)}>
          <option value="Any">Any duration</option>
          <option value="Half-day">Half-day</option>
          <option value="1-2 days">1-2 days</option>
          <option value="3+ days">3+ days</option>
        </select>

        <select value={priceRange} onChange={(event) => setPriceRange(event.target.value)}>
          <option value="Any budget">Any budget</option>
          <option value="Under $100">Under $100</option>
          <option value="$100-$180">$100-$180</option>
          <option value="$180+">$180+</option>
        </select>

        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {categoryOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="popular">Sort: Popularity</option>
          <option value="price-low">Price: Low to high</option>
          <option value="price-high">Price: High to low</option>
          <option value="duration">Duration</option>
        </select>
      </div>

      <div className="tour-grid">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <div className="empty-state">
            <h3>No journeys match your filters.</h3>
            <p>Try adjusting your search or clearing one of the filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
