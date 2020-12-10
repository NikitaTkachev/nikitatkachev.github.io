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
    "url": "index.html",
    "revision": "737c13ff7e39ec55f042b891003796d1"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-015335ef.js"
  },
  {
    "url": "build/p-05bf65e9.entry.js"
  },
  {
    "url": "build/p-07d035db.entry.js"
  },
  {
    "url": "build/p-0869b8f2.entry.js"
  },
  {
    "url": "build/p-0d2d3913.entry.js"
  },
  {
    "url": "build/p-101feae9.js"
  },
  {
    "url": "build/p-111520a0.js"
  },
  {
    "url": "build/p-160b8fb7.entry.js"
  },
  {
    "url": "build/p-1b37168e.entry.js"
  },
  {
    "url": "build/p-1cad19cd.entry.js"
  },
  {
    "url": "build/p-22e916da.entry.js"
  },
  {
    "url": "build/p-2331705d.entry.js"
  },
  {
    "url": "build/p-237ae0f5.entry.js"
  },
  {
    "url": "build/p-261e49b8.js"
  },
  {
    "url": "build/p-27174850.entry.js"
  },
  {
    "url": "build/p-298687d6.entry.js"
  },
  {
    "url": "build/p-298c83f4.entry.js"
  },
  {
    "url": "build/p-2e4e8117.js"
  },
  {
    "url": "build/p-309fcc2b.entry.js"
  },
  {
    "url": "build/p-31eb97f7.entry.js"
  },
  {
    "url": "build/p-33188ba3.entry.js"
  },
  {
    "url": "build/p-34000c0f.entry.js"
  },
  {
    "url": "build/p-3404867b.entry.js"
  },
  {
    "url": "build/p-38fe9eaa.entry.js"
  },
  {
    "url": "build/p-3a2292fc.entry.js"
  },
  {
    "url": "build/p-3a3b7325.entry.js"
  },
  {
    "url": "build/p-3ad1930f.js"
  },
  {
    "url": "build/p-3afcbc82.js"
  },
  {
    "url": "build/p-40af65be.entry.js"
  },
  {
    "url": "build/p-417a8dd6.js"
  },
  {
    "url": "build/p-45f465f1.entry.js"
  },
  {
    "url": "build/p-4c93332f.entry.js"
  },
  {
    "url": "build/p-4df0e5e9.entry.js"
  },
  {
    "url": "build/p-4f120fa2.js"
  },
  {
    "url": "build/p-551b7a04.js"
  },
  {
    "url": "build/p-570e71ad.entry.js"
  },
  {
    "url": "build/p-57ffd455.entry.js"
  },
  {
    "url": "build/p-5ccd540e.entry.js"
  },
  {
    "url": "build/p-5e9db064.entry.js"
  },
  {
    "url": "build/p-657d49b9.entry.js"
  },
  {
    "url": "build/p-6da9bb6e.js"
  },
  {
    "url": "build/p-6f495800.entry.js"
  },
  {
    "url": "build/p-6ffab685.js"
  },
  {
    "url": "build/p-70f45215.js"
  },
  {
    "url": "build/p-7304a2b0.entry.js"
  },
  {
    "url": "build/p-76978e72.entry.js"
  },
  {
    "url": "build/p-76f8194b.entry.js"
  },
  {
    "url": "build/p-7840618d.js"
  },
  {
    "url": "build/p-7abcd45b.entry.js"
  },
  {
    "url": "build/p-7b82af5f.entry.js"
  },
  {
    "url": "build/p-7e974018.entry.js"
  },
  {
    "url": "build/p-8c2cb671.entry.js"
  },
  {
    "url": "build/p-8df3d8ca.entry.js"
  },
  {
    "url": "build/p-8e878367.js"
  },
  {
    "url": "build/p-8f72be08.js"
  },
  {
    "url": "build/p-8fc9298a.js"
  },
  {
    "url": "build/p-920ea4a7.entry.js"
  },
  {
    "url": "build/p-99aa038d.entry.js"
  },
  {
    "url": "build/p-99cd80b7.entry.js"
  },
  {
    "url": "build/p-9aba7e49.entry.js"
  },
  {
    "url": "build/p-9d698c57.entry.js"
  },
  {
    "url": "build/p-a2b1570c.entry.js"
  },
  {
    "url": "build/p-a38ea475.js"
  },
  {
    "url": "build/p-aabfc993.js"
  },
  {
    "url": "build/p-aef0bba0.js"
  },
  {
    "url": "build/p-b11fe0c7.js"
  },
  {
    "url": "build/p-b46727a8.entry.js"
  },
  {
    "url": "build/p-b9b2fc0a.entry.js"
  },
  {
    "url": "build/p-bfde0fac.entry.js"
  },
  {
    "url": "build/p-c02919d1.entry.js"
  },
  {
    "url": "build/p-c23a252d.entry.js"
  },
  {
    "url": "build/p-c259839a.entry.js"
  },
  {
    "url": "build/p-c33f3882.entry.js"
  },
  {
    "url": "build/p-c52663af.js"
  },
  {
    "url": "build/p-c563b4de.js"
  },
  {
    "url": "build/p-c5a29178.js"
  },
  {
    "url": "build/p-c79c9819.entry.js"
  },
  {
    "url": "build/p-cad05044.entry.js"
  },
  {
    "url": "build/p-cb389681.entry.js"
  },
  {
    "url": "build/p-cfed409c.entry.js"
  },
  {
    "url": "build/p-d182af39.entry.js"
  },
  {
    "url": "build/p-d18c7c5b.entry.js"
  },
  {
    "url": "build/p-d3ed69df.entry.js"
  },
  {
    "url": "build/p-d6720089.js"
  },
  {
    "url": "build/p-d7fa623b.entry.js"
  },
  {
    "url": "build/p-dc1eea0c.entry.js"
  },
  {
    "url": "build/p-dc373dca.entry.js"
  },
  {
    "url": "build/p-de6940b5.js"
  },
  {
    "url": "build/p-de713bbb.entry.js"
  },
  {
    "url": "build/p-dfa6fcd6.js"
  },
  {
    "url": "build/p-e2500d3e.entry.js"
  },
  {
    "url": "build/p-e51fa8ea.entry.js"
  },
  {
    "url": "build/p-e86e64d3.entry.js"
  },
  {
    "url": "build/p-e9f4845b.entry.js"
  },
  {
    "url": "build/p-ecb440d1.entry.js"
  },
  {
    "url": "build/p-edb45761.entry.js"
  },
  {
    "url": "build/p-f017fa56.entry.js"
  },
  {
    "url": "build/p-f180d2a1.entry.js"
  },
  {
    "url": "build/p-f3493906.js"
  },
  {
    "url": "build/p-f8106eeb.entry.js"
  },
  {
    "url": "build/p-fc94d1fa.entry.js"
  },
  {
    "url": "build/p-fd99b4ec.entry.js"
  },
  {
    "url": "build/p-fff5d831.entry.js"
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
    "revision": "b0e5a3f0d881e2d06e60bc6506fd2122"
  }
]);
