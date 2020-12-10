importScripts('workbox-v4.3.1/workbox-sw.js');

const { precacheAndRoute } = workbox.precaching;
const { BackgroundSyncPlugin, Queue } = workbox.backgroundSync;


self.addEventListener('message', ({ data }) => {
  if (data === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', () => {
  clients.claim();
});



const queue = new Queue('seat-booking-queue', {
  onSync: async ({queue}) => {
    let entry;
    while (entry = await queue.shiftRequest()) {
      try {
        const response = await fetch(entry.request);
        const data = await response.json();

        const clients = await self.clients.matchAll({type: 'window'});
        for (const client of clients) {
          client.postMessage({
            ok: response.ok,
            data: data,
          });
        }
      } catch (error) {
        // Put the entry back in the queue and re-throw the error:
        await this.unshiftRequest(entry);
        throw error;
      }
    }
  },
});

self.addEventListener('fetch', event => {
  // Clone the request to ensure it's safe to read when
  // adding to the Queue
  const promiseChain = fetch(event.request.clone())
    .catch(err => {
      // Add to Queue only booking requests
      if (event.request.url.startsWith('https://cinema-booking-pwa-app.herokuapp.com/seats/book/')) {
        return queue.pushRequest({
          request: event.request,
        });
      }
    });
  
  event.waitUntil(promiseChain);
});

precacheAndRoute([
  {
    "url": "index-org.html",
    "revision": "5ff7cb88b759c5affe78b90b6a8c371a"
  },
  {
    "url": "index.html",
    "revision": "5ff7cb88b759c5affe78b90b6a8c371a"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-099844a5.entry.js"
  },
  {
    "url": "build/p-0f13112e.entry.js"
  },
  {
    "url": "build/p-101feae9.js"
  },
  {
    "url": "build/p-108ee574.entry.js"
  },
  {
    "url": "build/p-111520a0.js"
  },
  {
    "url": "build/p-1526b95b.entry.js"
  },
  {
    "url": "build/p-154fbeb3.entry.js"
  },
  {
    "url": "build/p-195eba0d.entry.js"
  },
  {
    "url": "build/p-19c4167a.entry.js"
  },
  {
    "url": "build/p-1ded0ab7.entry.js"
  },
  {
    "url": "build/p-1f1320ac.entry.js"
  },
  {
    "url": "build/p-22c4fd2c.entry.js"
  },
  {
    "url": "build/p-261e49b8.js"
  },
  {
    "url": "build/p-2a3b76cd.entry.js"
  },
  {
    "url": "build/p-2d37a963.entry.js"
  },
  {
    "url": "build/p-2e4e8117.js"
  },
  {
    "url": "build/p-35c626de.entry.js"
  },
  {
    "url": "build/p-37995402.entry.js"
  },
  {
    "url": "build/p-3e6ea101.js"
  },
  {
    "url": "build/p-3f1e6b69.entry.js"
  },
  {
    "url": "build/p-414b62e9.entry.js"
  },
  {
    "url": "build/p-417a8dd6.js"
  },
  {
    "url": "build/p-4551d722.entry.js"
  },
  {
    "url": "build/p-469cbf78.entry.js"
  },
  {
    "url": "build/p-4e942974.entry.js"
  },
  {
    "url": "build/p-5025e2d0.js"
  },
  {
    "url": "build/p-53d97419.entry.js"
  },
  {
    "url": "build/p-551b7a04.js"
  },
  {
    "url": "build/p-57ed9e21.entry.js"
  },
  {
    "url": "build/p-57fbabe0.js"
  },
  {
    "url": "build/p-592dfeab.entry.js"
  },
  {
    "url": "build/p-59f94a91.entry.js"
  },
  {
    "url": "build/p-601a476c.entry.js"
  },
  {
    "url": "build/p-60e1b674.entry.js"
  },
  {
    "url": "build/p-6288f95f.entry.js"
  },
  {
    "url": "build/p-64e2d103.entry.js"
  },
  {
    "url": "build/p-686c9e14.entry.js"
  },
  {
    "url": "build/p-6937158e.entry.js"
  },
  {
    "url": "build/p-6a28c9e1.entry.js"
  },
  {
    "url": "build/p-6c5e75ef.entry.js"
  },
  {
    "url": "build/p-6c64c807.entry.js"
  },
  {
    "url": "build/p-707fd678.entry.js"
  },
  {
    "url": "build/p-730742e4.entry.js"
  },
  {
    "url": "build/p-74a55053.js"
  },
  {
    "url": "build/p-74f04ffc.entry.js"
  },
  {
    "url": "build/p-753ce4fb.entry.js"
  },
  {
    "url": "build/p-7840618d.js"
  },
  {
    "url": "build/p-7d86b20f.entry.js"
  },
  {
    "url": "build/p-7f77a159.entry.js"
  },
  {
    "url": "build/p-80e132bb.entry.js"
  },
  {
    "url": "build/p-81a099c3.entry.js"
  },
  {
    "url": "build/p-8784f1d0.js"
  },
  {
    "url": "build/p-878a8ec5.entry.js"
  },
  {
    "url": "build/p-87d51fc3.entry.js"
  },
  {
    "url": "build/p-8b11461d.entry.js"
  },
  {
    "url": "build/p-8bbb059a.entry.js"
  },
  {
    "url": "build/p-8c7e4e15.entry.js"
  },
  {
    "url": "build/p-8e1043f8.entry.js"
  },
  {
    "url": "build/p-8f72be08.js"
  },
  {
    "url": "build/p-8fc9298a.js"
  },
  {
    "url": "build/p-90b06e43.entry.js"
  },
  {
    "url": "build/p-94d7f728.js"
  },
  {
    "url": "build/p-95e9794e.js"
  },
  {
    "url": "build/p-99febf9f.entry.js"
  },
  {
    "url": "build/p-9f7aea91.entry.js"
  },
  {
    "url": "build/p-a38ea475.js"
  },
  {
    "url": "build/p-a4337470.entry.js"
  },
  {
    "url": "build/p-aabfc993.js"
  },
  {
    "url": "build/p-ac7d23bd.entry.js"
  },
  {
    "url": "build/p-aef0bba0.js"
  },
  {
    "url": "build/p-afc289a0.entry.js"
  },
  {
    "url": "build/p-b07a13e2.entry.js"
  },
  {
    "url": "build/p-b11fe0c7.js"
  },
  {
    "url": "build/p-b37ea350.entry.js"
  },
  {
    "url": "build/p-b6e3c6b5.entry.js"
  },
  {
    "url": "build/p-bbb6880c.entry.js"
  },
  {
    "url": "build/p-bdb9d711.entry.js"
  },
  {
    "url": "build/p-bf20ae8c.entry.js"
  },
  {
    "url": "build/p-bf664dbd.entry.js"
  },
  {
    "url": "build/p-c2437b5b.js"
  },
  {
    "url": "build/p-c2e5c932.entry.js"
  },
  {
    "url": "build/p-c36474aa.entry.js"
  },
  {
    "url": "build/p-c563b4de.js"
  },
  {
    "url": "build/p-c5a29178.js"
  },
  {
    "url": "build/p-c606f421.entry.js"
  },
  {
    "url": "build/p-c860d030.entry.js"
  },
  {
    "url": "build/p-c97a3d4d.entry.js"
  },
  {
    "url": "build/p-cd1d9d8a.entry.js"
  },
  {
    "url": "build/p-d04f423f.entry.js"
  },
  {
    "url": "build/p-d091a4c6.entry.js"
  },
  {
    "url": "build/p-d2c0e8f6.js"
  },
  {
    "url": "build/p-d6720089.js"
  },
  {
    "url": "build/p-dfa6fcd6.js"
  },
  {
    "url": "build/p-e33d92fb.entry.js"
  },
  {
    "url": "build/p-e5ca0327.entry.js"
  },
  {
    "url": "build/p-e6c21c29.entry.js"
  },
  {
    "url": "build/p-ebdab95d.entry.js"
  },
  {
    "url": "build/p-ecdc408d.entry.js"
  },
  {
    "url": "build/p-ed853072.entry.js"
  },
  {
    "url": "build/p-f355a6e5.js"
  },
  {
    "url": "build/p-f4320da6.js"
  },
  {
    "url": "build/p-fbf9fc6c.entry.js"
  },
  {
    "url": "build/p-ff815cd8.entry.js"
  },
  {
    "url": "build/swiper/swiper.bundle.js",
    "revision": "6005d4ed9e9883cb161dd88b845cbda7"
  },
  {
    "url": "build/swiper/swiper.js",
    "revision": "3bff251b2c56d790122af10b62a4e3f1"
  },
  {
    "url": "manifest.json",
    "revision": "dfbc9d7f47f1fe9e4b4531e82fa6fd50"
  }
]);
