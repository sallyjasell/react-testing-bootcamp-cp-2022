import { rest } from "msw";

export const handlers = [
  rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({
        copyright: "Wilhelm Michael Kasakow",
        date: "2022-04-29",
        explanation:
          "Sharp telescopic views of NGC 3628 show a puffy galactic disk divided by dark dust lanes. Of course, this portrait of the magnificent, edge-on spiral galaxy puts some astronomers in mind of its popular moniker, the Hamburger Galaxy. It also reveals a small galaxy nearby (below), likely a satellite of NGC 3628, and a very faint but extensive tidal tail. The drawn out tail stretches for about 300,000 light-years, even beyond the upper left edge of the frame. NGC 3628 shares its neighborhood in the local universe with two other large spirals M65 and M66 in a grouping otherwise known as the Leo Triplet. Gravitational interactions with its cosmic neighbors are likely responsible for creating the tidal tail, as well as the extended flare and warp of this spiral's disk. The tantalizing island universe itself is about 100,000 light-years across and 35 million light-years away in the northern springtime constellation Leo.",
        hdurl: "https://apod.nasa.gov/apod/image/2204/NGC3628-crop.jpg",
        media_type: "image",
        service_version: "v1",
        title: "Portrait of NGC 3628",
        url: "https://apod.nasa.gov/apod/image/2204/NGC3628-crop1024.jpg",
      })
    );
  }),
];
