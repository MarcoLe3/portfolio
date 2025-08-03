import React from 'react';
import Back from '../components/button/Back';

function Portfolio() {
  return (
    <div className="w-full min-h-screen font-medium text-[#0D1B2A] px-4 pb-40">
      <Back />
      <div className="w-full flex flex-col items-center justify-center pt-40 text-center mt-12">
        {/* Project Title */}
        <h1 className="text-[72px] md:text-[90px] mb-6">Cache Manager</h1>

        <img src="/image/cac.png" className='max-w-[800px] mb-20' />
        {/* Description */}
        <p className="max-w-[800px] text-[20px] md:text-[28px] leading-relaxed mb-12 text-justify text-left">
          A lightweight and efficient C++ cache manager that stores, retrieves, and organizes key-value data. It supports TTL (Time-To-Live), limits max cache size, and can serialize/deserialize data using JSON. Includes support for in-order, pre-order, and post-order tree traversals for displaying stored items.
        </p>

        {/* Grouped Sections Container */}
        <div className="max-w-[800px] w-full space-y-20 text-left">
          {/* Features */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Features</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>Efficient key-value data caching using C++</li>
              <li>Supports TTL (Time-to-Live) for expiration</li>
              <li>Auto-eviction when max cache size is reached</li>
              <li>Tree structure with in-order, pre-order, and post-order traversals</li>
              <li>JSON input/output for easy integration</li>
              <li>Quick lookup and retrieval with O(log n) performance</li>
            </ul>
          </section>

          {/* Architecture */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Architecture</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>Built using modern C++ with custom data structures</li>
              <li>Self-balancing binary search tree for efficient ordered storage</li>
              <li>TTL tracking for cache entries with automatic expiration</li>
              <li>Eviction strategy to maintain max cache size</li>
              <li>Serialization and deserialization using JSON for persistence</li>
              <li>O(log n) complexity for insert, delete, and lookup operations</li>
            </ul>
          </section>

          {/* Prerequisites */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Prerequisites</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>Basic understanding of C++17 or later</li>
              <li>Familiarity with data structures like trees, hash tables, and linked lists</li>
              <li>Knowledge of JSON format and file handling</li>
              <li>Development environment with g++ or compatible C++ compiler</li>
            </ul>
          </section>

          {/* Setup */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Setup</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>Clone the repository to your local machine</li>
              <li>Compile the project using <code>g++ -std=c++17 src/*.cpp -o cache_manager</code></li>
              <li>Prepare JSON config and input files (e.g., <code>milestone6_config.json</code>)</li>
              <li>Run the executable with config file as argument: <code>./cache_manager milestone6_config.json</code></li>
            </ul>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Use Cases</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>Improving performance in applications by caching database query results</li>
              <li>Managing limited memory in embedded systems with TTL-based eviction</li>
              <li>Implementing efficient session storage for web servers</li>
              <li>Handling large datasets requiring sorted access and range queries</li>
              <li>Providing a backend cache layer for real-time analytics platforms</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
