# Breadit
This project is a clone of Reddit built with the Next.js App Router, Tailwind and Prisma.



## General Information
- I undertook this project to get further experience working with the Next.js App Router and React Server Components
- The emphasis in this project was to weigh the benefits of render strategies (client vs. server) for different parts of the application
- In general I wanted to get a taste for how to work on such a big project in terms of structure, planning and code organization.
- For styling I wanted to take a look at working with a component library using Tailwild styles. The appeal was the ability to add custom styling to the components.
- In the end this project was also about figuring out how all things come together on the backend and frontend, in particular using the combination of TS, Prisma and Zod



## Technologies Used (among other things)
- React 18.2.0
- Next 13.4.4
- TypeScript 5.0.4
- Tailwind 3.3.2
- Prisma 4.14.1
- NextAuth 4.22.1
- Zod 3.21.4
- TanStack Query 4.29.11
- EditorJS
- Lucide React
- shadcn/ui



## Features
- Authentication using NextAuth & Google
- Custom feed for authenticated users
- Advanced caching using Upstash Redis
- Infinite scrolling for dynamically loading posts
- Data fetching using TanStack Query
- Functional post editor provided by EditorJS
- Image uploads and link previews
- Full comment functionality with nested replies
- Creating subreddits / posts
- Editing profile / username



## Screenshots
![Example screenshot](https://i.ibb.co/9q4tNgm/breadit.jpg)



## Demo
Live demo [_here_](https://breadit-phi-peach.vercel.app/).



## Learnings
- Working with components from shadcn/ui e.g. Buttons, Toast, Dropdownmenu, Avatar and customizing them with Tailwind styles
- Using zod schemas to validate API responses
- Creating TS modules to extend existing NextJS types
- Using TanStack Query for data fetching (handling success / error cases on the frontend)
- Working with Upstash Redis to implement caching (improving performance)
- Deciding different render strategies (client or server) for different content. Using streaming / Suspense
- Using EditorJS to implement an editor for creating posts
- Handling authentication with NextAuth & Google



## Project Status
The project is finished in terms of the tutorial. I may revisit this project once I'm more comfortable using the technogies used in this project. There are several features of reddit which aren't included yet such as saving posts, giving awards and moderation of subreddits which I'm keen to implement once capable in doing so.



## Acknowledgements
- This project is based on a [tutorial](https://www.youtube.com/watch?v=mSUKMfmLAt0) from [Josh tried coding]([https://www.youtube.com/channel/UCvGwM5woTl13I-qThI4YMCg](https://www.youtube.com/channel/UCvGwM5woTl13I-qThI4YMCg))


