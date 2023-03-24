const data = [
  {
    node: {
      youtubePreviewId: "dfsdfsdsadasfgfsgf",
      totalHours: 12,
      totalLessons: 116,
      courseTitle: "Testing: The Complete Developer's Guide",
      courseExcerpt:
        "The most comprehensive, all-in-one software testing course online. Learn unit testing, API backend testing, E2E testing and everything in between using JavaScript, Python, React, Node, Rust, Vue, Angular + more!",
      courseUrl: "/courses/software-testing-course/",
      coursePopularity: 32,
      lastUpdatedOn: "2023-03-08",
      filterTopics: [
        "Frontend Development",
        "Backend Development",
        "Web Development",
        "Software Engineering",
        "Computer Science",
      ],
      filterLevels: ["Advanced"],
      createdAt: "2023-03-07T20:08:00.508Z",
      badge: {
        contentfulid: "advanced",
        title: "Advanced",
        color: "#F14D68",
      },
      courseImage: {
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/aq13lwl6616q/2EeREnfl8XLC3K29O97nSo/3600df2550057c2d96db886e13306f2a/Testing_Thumbnail.png?w=100&h=56&q=100&fm=webp&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/2EeREnfl8XLC3K29O97nSo/3600df2550057c2d96db886e13306f2a/Testing_Thumbnail.png?w=200&h=113&q=100&fm=webp&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/2EeREnfl8XLC3K29O97nSo/3600df2550057c2d96db886e13306f2a/Testing_Thumbnail.png?w=400&h=225&q=100&fm=webp&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/2EeREnfl8XLC3K29O97nSo/3600df2550057c2d96db886e13306f2a/Testing_Thumbnail.png?w=800&h=450&q=100&fm=webp&bg=transparent 800w",
                sizes: "(min-width: 400px) 400px, 100vw",
                type: "image/webp",
              },
            ],
            fallback: {
              src: "https://images.ctfassets.net/aq13lwl6616q/2EeREnfl8XLC3K29O97nSo/3600df2550057c2d96db886e13306f2a/Testing_Thumbnail.png?w=400&h=225&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/aq13lwl6616q/2EeREnfl8XLC3K29O97nSo/3600df2550057c2d96db886e13306f2a/Testing_Thumbnail.png?w=100&h=56&q=100&fm=png&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/2EeREnfl8XLC3K29O97nSo/3600df2550057c2d96db886e13306f2a/Testing_Thumbnail.png?w=200&h=113&q=100&fm=png&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/2EeREnfl8XLC3K29O97nSo/3600df2550057c2d96db886e13306f2a/Testing_Thumbnail.png?w=400&h=225&q=100&fm=png&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/2EeREnfl8XLC3K29O97nSo/3600df2550057c2d96db886e13306f2a/Testing_Thumbnail.png?w=800&h=450&q=100&fm=png&bg=transparent 800w",
              sizes: "(min-width: 400px) 400px, 100vw",
            },
          },
          layout: "constrained",
          backgroundColor: "transparent",
          width: 400,
          height: 225,
          placeholder: {
            fallback:
              "data:image/png;base64,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",
          },
        },
      },
      authors: [
        {
          id: "54ef815a-346c-5e46-995b-f3c89bf44bd0",
          authorName: "Andrei Neagoie",
          authorSlug: "andrei-neagoie",
          profileImage: {
            file: {
              url: "//images.ctfassets.net/aq13lwl6616q/3jyqzyDMgKDqWLua869Q0Z/86124d5fbcfc747a0348e631aba7c0f6/andrei.jpg",
            },
          },
        },
      ],
    },
  },
  {
    node: {
      youtubePreviewId: "VymhhZfZFHw",
      totalHours: 15,
      totalLessons: 297,
      courseTitle: "AWS Certified Solutions Architect: Zero to Mastery",
      courseExcerpt:
        "Learn AWS from an industry expert. You'll learn AWS fundamentals all the way to advanced cloud technologies so that you'll be able to ace the solutions architect certification exam and get hired as a Cloud Architect!",
      courseUrl: "/courses/aws-certified-solutions-architect-bootcamp",
      coursePopularity: 53,
      lastUpdatedOn: "2023-01-19",
      filterTopics: ["Backend Development", "AWS"],
      filterLevels: ["Intermediate"],
      createdAt: "2023-01-16T18:55:21.898Z",
      badge: {
        contentfulid: "intermediate",
        title: "Intermediate",
        color: "#677BFA",
      },
      courseImage: {
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/aq13lwl6616q/5KT85Ukzowb5SdqeJE30uh/2cdab703179a718beae9c4e1864d3376/Course_Thumbnail_-_AWS_Solutions_Architect_-_Academy_2.png?w=100&h=56&q=100&fm=webp&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/5KT85Ukzowb5SdqeJE30uh/2cdab703179a718beae9c4e1864d3376/Course_Thumbnail_-_AWS_Solutions_Architect_-_Academy_2.png?w=200&h=113&q=100&fm=webp&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/5KT85Ukzowb5SdqeJE30uh/2cdab703179a718beae9c4e1864d3376/Course_Thumbnail_-_AWS_Solutions_Architect_-_Academy_2.png?w=400&h=225&q=100&fm=webp&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/5KT85Ukzowb5SdqeJE30uh/2cdab703179a718beae9c4e1864d3376/Course_Thumbnail_-_AWS_Solutions_Architect_-_Academy_2.png?w=800&h=450&q=100&fm=webp&bg=transparent 800w",
                sizes: "(min-width: 400px) 400px, 100vw",
                type: "image/webp",
              },
            ],
            fallback: {
              src: "https://images.ctfassets.net/aq13lwl6616q/5KT85Ukzowb5SdqeJE30uh/2cdab703179a718beae9c4e1864d3376/Course_Thumbnail_-_AWS_Solutions_Architect_-_Academy_2.png?w=400&h=225&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/aq13lwl6616q/5KT85Ukzowb5SdqeJE30uh/2cdab703179a718beae9c4e1864d3376/Course_Thumbnail_-_AWS_Solutions_Architect_-_Academy_2.png?w=100&h=56&q=100&fm=png&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/5KT85Ukzowb5SdqeJE30uh/2cdab703179a718beae9c4e1864d3376/Course_Thumbnail_-_AWS_Solutions_Architect_-_Academy_2.png?w=200&h=113&q=100&fm=png&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/5KT85Ukzowb5SdqeJE30uh/2cdab703179a718beae9c4e1864d3376/Course_Thumbnail_-_AWS_Solutions_Architect_-_Academy_2.png?w=400&h=225&q=100&fm=png&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/5KT85Ukzowb5SdqeJE30uh/2cdab703179a718beae9c4e1864d3376/Course_Thumbnail_-_AWS_Solutions_Architect_-_Academy_2.png?w=800&h=450&q=100&fm=png&bg=transparent 800w",
              sizes: "(min-width: 400px) 400px, 100vw",
            },
          },
          layout: "constrained",
          backgroundColor: "transparent",
          width: 400,
          height: 225,
          placeholder: {
            fallback:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAMAAABI111xAAACjlBMVEXVaSbabir3ikbxh0HphjrulT7qmDzqjzzqiDvrhjzshz3siz3ujj/yjkL3lEf6kEjufj7kdzTUZSTVaCbVcybgczDseTjrfjnyhUH9kkj4lkbymEL2mUbMjFfMhFPsfj35iEj+mU39mEz9l0z1iUTVZyXVZSbWiifWgijWdCfWfSjZgSvlgjXthT3oiVKJc6hFTfNHTeSCbprrkFP9m0v9lUf9hUb8gUfmdjbYaSjXaSfanDDYlzLXhSrZfCrYeynXeCiedWxETelCQ/Zpa/F2acY2Oc82RsSkf2TniTHfeC3dcyzZbCrvfj73i0XioDXtrUX2t1H6nkrgfjHhfjJ6Z6o4OvNFSOtAReA8QtUuNsgeKrlmWH/deC7fhTDehy/ffTDpeTbxfD33rUj+tU/9vVT9ulH3oEnoiTh1YqIxNeR6fuZ7f9+Ahdpqcc0XJahqWX/miDfhjjPjkDXljTbkfTX8rUn9sk79o0f8n0T6m0TtkD1vYpoqMdNBSc48RcM6RbovPK0PIJhuXH7zmELokjnrkDzrjjzplDroljrjgDTmlzrpnT3jkjTlmzbqmzt2aX4kMcU1QL44Q7UrOagkNJwMI45vVWXkdjTpfzn6jUn9kUv7kkrokDnfdC/dcS7bdizUgCbuoDz7okbejTV/YU0sPpkRIpsMH5AlN4OIX0zRcijLXRzoczb6hEP9ikX7l0jvmD7ZkDbXcCfTZyTUaCXXdSjYeinaeCvojzjFfDVgU11cSlS1YCbabyvfei/0jkPrezvXZijfby3hezHfhzDWkzHWjijXgCjXbSjYbinZaynndTf8jUv9l0v2mEvgfDXcdC3bcCzhdjHrfDfmeTTZcCnabCvdcS3feTCWMDOnAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5wMOCDIyS17YMAAAACZJREFUCNdjZGDEAkTQBd4LMbIIY1HFIoJFN7GCDFjMZKTQTByCAJMbAs+nAH8XAAAAMnRFWHRDb21tZW50AHhyOmQ6REFGVWotNTlWNWc6MjEsajozMjA4NzY3NTQsdDoyMjEyMTIxOJ1OjkQAAAAASUVORK5CYII=",
          },
        },
      },
      authors: [
        {
          id: "13beae45-b396-5478-895f-1acc26af52d8",
          authorName: "Amber Israelsen",
          authorSlug: "amber-israelsen",
          profileImage: {
            file: {
              url: "//images.ctfassets.net/aq13lwl6616q/17fjlubVut3bMSBJRGsdoQ/694e4a541e2a57529843a89e5217c623/Amber_Israelsen_3__transparent_.png",
            },
          },
        },
      ],
    },
  },
  {
    node: {
      youtubePreviewId: "kdfddsjfJJHG",
      totalHours: 5,
      totalLessons: 36,
      courseTitle: "Web3 Masterclass: Blockchain, DApps, DAOs + More",
      courseExcerpt:
        "Learn all about web3, the future of the web! This course will get you up to speed on everything you need to know about web3 including topics like Blockchain, Cryptocurrencies, Smart Contracts, DApps, DAOs, NFTs, + more.",
      courseUrl: "/courses/introduction-to-web3",
      coursePopularity: 45,
      lastUpdatedOn: "2022-05-22",
      filterTopics: ["NFTs", "Ethereum"],
      filterLevels: ["Beginner"],
      createdAt: "2022-03-10T17:07:43.402Z",
      badge: {
        contentfulid: "beginner",
        title: "Beginner",
        color: "#15d642",
      },
      courseImage: {
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/aq13lwl6616q/6xj7YJoJ3XDmZAC84GdkgH/959105f200012c643e8fb2bfc39c61ab/Thumbnail5.png?w=100&h=56&q=100&fm=webp&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6xj7YJoJ3XDmZAC84GdkgH/959105f200012c643e8fb2bfc39c61ab/Thumbnail5.png?w=200&h=113&q=100&fm=webp&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6xj7YJoJ3XDmZAC84GdkgH/959105f200012c643e8fb2bfc39c61ab/Thumbnail5.png?w=400&h=225&q=100&fm=webp&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6xj7YJoJ3XDmZAC84GdkgH/959105f200012c643e8fb2bfc39c61ab/Thumbnail5.png?w=800&h=450&q=100&fm=webp&bg=transparent 800w",
                sizes: "(min-width: 400px) 400px, 100vw",
                type: "image/webp",
              },
            ],
            fallback: {
              src: "https://images.ctfassets.net/aq13lwl6616q/6xj7YJoJ3XDmZAC84GdkgH/959105f200012c643e8fb2bfc39c61ab/Thumbnail5.png?w=400&h=225&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/aq13lwl6616q/6xj7YJoJ3XDmZAC84GdkgH/959105f200012c643e8fb2bfc39c61ab/Thumbnail5.png?w=100&h=56&q=100&fm=png&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6xj7YJoJ3XDmZAC84GdkgH/959105f200012c643e8fb2bfc39c61ab/Thumbnail5.png?w=200&h=113&q=100&fm=png&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6xj7YJoJ3XDmZAC84GdkgH/959105f200012c643e8fb2bfc39c61ab/Thumbnail5.png?w=400&h=225&q=100&fm=png&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6xj7YJoJ3XDmZAC84GdkgH/959105f200012c643e8fb2bfc39c61ab/Thumbnail5.png?w=800&h=450&q=100&fm=png&bg=transparent 800w",
              sizes: "(min-width: 400px) 400px, 100vw",
            },
          },
          layout: "constrained",
          backgroundColor: "transparent",
          width: 400,
          height: 225,
          placeholder: {
            fallback:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAMAAABI111xAAACKFBMVEX6/8yU6cbh+8ro/c3q/c3s/cvu/rTX/MHe/NLS+9nr/cDT+rvF+MDb/MXo/cvi/MTl/crp/c3w/sz0/8zx/83u/83Y8a/P6bmO9O3J+dvi+cmo7cWq77t27buR9Lmr+LuW8K6W8K+I9K7R/KTr/rrq/s3y/8zt/83s/s3q+cfF3Ip12NKixK+qw7LanMrbqcPSvcO94cKM88d54LO49bWk+bbc/arh/qXr/83q/83s/83v/svs/cm14aSK37d2wZ/PtqHyfcnlesbPgcW/p8GW6sSS77bX+LrO/bbK+rHl/8Tp/83w/crt+siZuIV2opFhlH6AoJ62rMO7nsbTjcXsu6us47Sq2Z3y/szq+8rv/cvs/8zx/cnu/MOUs3uLrIu+2Z671oSs7KiX17GKqpe83LOYx5yrz5Ta77Tr+sjt+snu/szu/Mru/sPa8a+evHyowIXU6q/u+8rl+cTa9LjM56rK6Kev05Gbzpq03JrK7JXm+bTt/Mvs+8rt/MXO6pSw0Halw5Hk5o70/cj1/sjz/cfy/cju/crZ85e+5X/C5IfJ5Xre8onw/Mbw/Mnv/Mju/Mnx/Mjy/MTU33PQ1GfCyVHj7aL0/Mbx/MPy/MLy+8Xy+8jw+8np+cLa9LPV867m+cHr+srr+snr+cns+ciryo2ConqRoV2yvJns8rDu+cHu+cPv+sbv+snv+cnu+cns+Mnr+Mnq98jp98jq+Mjn98Z0rY1CiZQLatvXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5wMIAxoaCohuXQAAAGVJREFUCNdjZGBkZGRAAEYw4AQR3xgYuBkZPzPwQcQYJRhRwT9mRkYWYVQxsH40QYipLIJIQvcYGf4rgwQFkASNL5xKB2sXYvzBCRd10mfjgWs/Zg0VFWJEWOQHt4cRqh3OhjsJAEP4C5Ku6RHcAAAAAElFTkSuQmCC",
          },
        },
      },
      authors: [
        {
          id: "4d5c862b-44a8-5601-9e3a-6a288cfd97c2",
          authorName: "Adam Odziemkowski",
          authorSlug: "adam-odziemkowski",
          profileImage: {
            file: {
              url: "//images.ctfassets.net/aq13lwl6616q/719IZvU4LVWt9rECcR0oG3/a0da40259fde3f116d7e419d5536e86d/bdIvNmsR_400x400.jpg",
            },
          },
        },
      ],
    },
  },
  {
    node: {
      youtubePreviewId: "C0RFwsq0X9E",
      totalHours: 26,
      totalLessons: 356,
      courseTitle: "Unity Bootcamp: 3D Game Development",
      courseExcerpt:
        "This is the only Unity course you need to go from complete beginner (no coding experience) to coding your own 3D games and getting hired as a Game Developer this year!",
      courseUrl: "/courses/learn-unity-bootcamp",
      coursePopularity: 58,
      lastUpdatedOn: "2023-02-13",
      filterTopics: ["UX & UI", "Game Development"],
      filterLevels: ["Beginner"],
      createdAt: "2023-02-08T20:33:40.010Z",
      badge: {
        contentfulid: "beginner",
        title: "Beginner",
        color: "#15d642",
      },
      courseImage: {
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/aq13lwl6616q/7zO5IGnPeFrbAAhf2peVOO/6142567146e43e2ecf39e1a7565ea113/Course_Thumbnail_2_-_Unity_3D_Game_Development.png?w=100&h=56&q=100&fm=webp&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/7zO5IGnPeFrbAAhf2peVOO/6142567146e43e2ecf39e1a7565ea113/Course_Thumbnail_2_-_Unity_3D_Game_Development.png?w=200&h=113&q=100&fm=webp&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/7zO5IGnPeFrbAAhf2peVOO/6142567146e43e2ecf39e1a7565ea113/Course_Thumbnail_2_-_Unity_3D_Game_Development.png?w=400&h=225&q=100&fm=webp&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/7zO5IGnPeFrbAAhf2peVOO/6142567146e43e2ecf39e1a7565ea113/Course_Thumbnail_2_-_Unity_3D_Game_Development.png?w=800&h=450&q=100&fm=webp&bg=transparent 800w",
                sizes: "(min-width: 400px) 400px, 100vw",
                type: "image/webp",
              },
            ],
            fallback: {
              src: "https://images.ctfassets.net/aq13lwl6616q/7zO5IGnPeFrbAAhf2peVOO/6142567146e43e2ecf39e1a7565ea113/Course_Thumbnail_2_-_Unity_3D_Game_Development.png?w=400&h=225&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/aq13lwl6616q/7zO5IGnPeFrbAAhf2peVOO/6142567146e43e2ecf39e1a7565ea113/Course_Thumbnail_2_-_Unity_3D_Game_Development.png?w=100&h=56&q=100&fm=png&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/7zO5IGnPeFrbAAhf2peVOO/6142567146e43e2ecf39e1a7565ea113/Course_Thumbnail_2_-_Unity_3D_Game_Development.png?w=200&h=113&q=100&fm=png&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/7zO5IGnPeFrbAAhf2peVOO/6142567146e43e2ecf39e1a7565ea113/Course_Thumbnail_2_-_Unity_3D_Game_Development.png?w=400&h=225&q=100&fm=png&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/7zO5IGnPeFrbAAhf2peVOO/6142567146e43e2ecf39e1a7565ea113/Course_Thumbnail_2_-_Unity_3D_Game_Development.png?w=800&h=450&q=100&fm=png&bg=transparent 800w",
              sizes: "(min-width: 400px) 400px, 100vw",
            },
          },
          layout: "constrained",
          backgroundColor: "transparent",
          width: 400,
          height: 225,
          placeholder: {
            fallback:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAMAAABI111xAAACRlBMVEWAi9i+VsLlVIPqhpnmubzfnWCfVRlPHRENBwcJAQEJISAHSUEKKBsKBgUIAQFePkLIkXKPw56OucCUua6diLTBbM/HhJuyjoNWUlgUDAsKAQEKAAEOBAUPBgcMAwQLAQEKAQIOAgVvM3pEfZxtpOyCqd+luW/AuWCbhCQWDQYOBQZFa2xop6hmpKVFbG0LAQIPAwdhc85fdtuj2WnMvmw3OSwbFxt/0taQ3+ZaRFZYQVSQ3uSCytEdExkjBBwqCRsHAQGa0q0TDQ0NAQIuKzOd3vyX5vdhlJdgj5Ohw+OvndcxHiwLAgIJAAEOBwE0MAk+PyoLBAELAgMMAAIPAgIwKzOYzexeID6WtdWjhbliFzmrkMozHiwPAQEMAQIqKgJggA0WEAQLBQQMBQQOBQQTBQUaBQY7JC6Hao1KJzB+g5qIWoBNGyiRTH0/GykbBQYPBQUOBwYXGgY8Th4nOClWTSBDPDs3NCtDNS1WNTCUe5Sf2PebzeqsjsSxltGcXYFWNC9ENS04NSwvNSspNixgbHaJ4Fjd3gLqoBJ7n11ZoZBkoZFyopKFopOfm5K5e5Cxqc29fLO6c4uGopNzopJkopFfopOOn7quq9Gz2c/S2QxrcY0RVFEXVFIdUU8mVFMvVFM8VFRPVFVuRVFuSFRQVVc+VVUwVFQmU1JNcEHCeDLWiJbZo8/Oys5yp8gSseAJUFMLT08NSEkQUFEVSEkcR0kkWFkqQkUqR0kpVFo/Olkzbn14pF380QL9aQXzPG/5lIj2jKDJc72sAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5wMJAyA2pUW7ogAAAGxJREFUCNdjZGDEAkQQzD+sjL/YQQwWISDxkYGBHyL6+v8LdaAgLyPjFTUGdqhihg+CfEBBPsbjYgxwM9gYZEFUACPjWRMkOy5+cGBkTES19xs340cBsEVIQBjkHhYkJ4HcBAYswljcjqISBgD0CRJTiQhsPQAAADR0RVh0Q29tbWVudAB4cjpkOkRBRllyMXFTVGtrOjY0LGo6NDY1NDA4ODQxMzksdDoyMzAyMDYyMt2PjNgAAAAASUVORK5CYII=",
          },
        },
      },
      authors: [
        {
          id: "82113a19-5ac2-5b36-a9d9-e76567a75792",
          authorName: "Luis Ramirez Jr",
          authorSlug: "luis-ramirez-jr",
          profileImage: {
            file: {
              url: "//images.ctfassets.net/aq13lwl6616q/3maUvjs7hPZaAqrbYBUQqk/d02d6a9eaff9d1bb8bf078eab2d5c47c/Luis.png",
            },
          },
        },
      ],
    },
  },
  {
    node: {
      youtubePreviewId: "VP35DZKxQqA",
      totalHours: 5,
      totalLessons: 48,
      courseTitle: "Consulting: The Complete Freelancer's Guide",
      courseExcerpt:
        "Use your existing skills to create a career or earn a side income by becoming a Freelance Consultant. You'll learn the exact steps to get high-paying clients and build an exciting career.",
      courseUrl: "/courses/learn-freelance-consulting",
      coursePopularity: 32,
      lastUpdatedOn: "2022-05-21",
      filterTopics: ["Freelancing"],
      filterLevels: ["Advanced"],
      createdAt: "2022-03-04T14:02:51.661Z",
      badge: {
        contentfulid: "advanced",
        title: "Advanced",
        color: "#F14D68",
      },
      courseImage: {
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/aq13lwl6616q/3TORgJDeSpKW4OfSIiEUpV/a7aa42bd30f220e59d0c0c26a7509518/Freelance_Consulting_-_Academy_Thumbnail_2.png?w=100&h=56&q=100&fm=webp&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/3TORgJDeSpKW4OfSIiEUpV/a7aa42bd30f220e59d0c0c26a7509518/Freelance_Consulting_-_Academy_Thumbnail_2.png?w=200&h=113&q=100&fm=webp&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/3TORgJDeSpKW4OfSIiEUpV/a7aa42bd30f220e59d0c0c26a7509518/Freelance_Consulting_-_Academy_Thumbnail_2.png?w=400&h=225&q=100&fm=webp&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/3TORgJDeSpKW4OfSIiEUpV/a7aa42bd30f220e59d0c0c26a7509518/Freelance_Consulting_-_Academy_Thumbnail_2.png?w=800&h=450&q=100&fm=webp&bg=transparent 800w",
                sizes: "(min-width: 400px) 400px, 100vw",
                type: "image/webp",
              },
            ],
            fallback: {
              src: "https://images.ctfassets.net/aq13lwl6616q/3TORgJDeSpKW4OfSIiEUpV/a7aa42bd30f220e59d0c0c26a7509518/Freelance_Consulting_-_Academy_Thumbnail_2.png?w=400&h=225&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/aq13lwl6616q/3TORgJDeSpKW4OfSIiEUpV/a7aa42bd30f220e59d0c0c26a7509518/Freelance_Consulting_-_Academy_Thumbnail_2.png?w=100&h=56&q=100&fm=png&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/3TORgJDeSpKW4OfSIiEUpV/a7aa42bd30f220e59d0c0c26a7509518/Freelance_Consulting_-_Academy_Thumbnail_2.png?w=200&h=113&q=100&fm=png&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/3TORgJDeSpKW4OfSIiEUpV/a7aa42bd30f220e59d0c0c26a7509518/Freelance_Consulting_-_Academy_Thumbnail_2.png?w=400&h=225&q=100&fm=png&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/3TORgJDeSpKW4OfSIiEUpV/a7aa42bd30f220e59d0c0c26a7509518/Freelance_Consulting_-_Academy_Thumbnail_2.png?w=800&h=450&q=100&fm=png&bg=transparent 800w",
              sizes: "(min-width: 400px) 400px, 100vw",
            },
          },
          layout: "constrained",
          backgroundColor: "transparent",
          width: 400,
          height: 225,
          placeholder: {
            fallback:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAMAAABI111xAAACN1BMVEVRhdlTiMloiLxplvBZjO9Yiu9biexXi+9ajOxfjOVZi+9njd1rfKGHhppljd1agrJjldNnkdNhj+p6jsxRgMdrlu1Yiu5cjepYjOVMqduDk5pXiOZaiexeiehYi+9ej+9jke5aebZ5b3qVmqdbiuZ3dKtpjeNvmupciupiiONZi+1Yi+RRnc5LkcM2OYFiZ6BZnuNgi+ZjjelikfBwdaxghtNnfZ1qhLFkke1Sh9tcjedbjO5Ziu5ciutdi+Zqi6t4aY2GWot4dYVog5iHrZ9bjOtdiuhdjO5titBaiuxWielrltlZie1djOldjehigsN/d5peqKWFhIdkncp5isFfjudci+pai+1dieFejedcjOtdjOpag96cwXweTYxXe7dJbrlkespUiOdXiu1VieoweJVEh81jjONaiutbiutwkMpilcF7aXhdeMhfiehbiuxFhscvd5RXiexcieFZh+FjiNZaiu08g7o3fK9ejOdadMdDaJ1mXoFne9RhjeRPhd0reZhBhsFlj+pqhshkh9WGeIJgkO6gp8qVm7lkh8JFgbtYi+FEarcAAABNedJbjepUh+FOgcBoicqtqbeJndNdj+uDdn5hgrVcje6BhrZlj+lqhcVhjOVYi+5Rf9sZLFcdLU5VheZai+xZietejeplg8yFhrBgj+5hg7lllehdjuR6eqdikOlfjOlmjdtZiepXie1OetRDardEbLtPfdlYie5fi+NhjOJhjuplj+Nxd6ZhkOpklOi/4C1NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5wIaCAEspyFpGwAAAHdJREFUCNdjZGAEASD5j/kvCyMUCIKID4KMKECFEROwiGARZGRlcP8g+F4IynsuxbhO0ImJgeGDLO9JXgjYwMC4KdZ3LUs8I+N8hiSIuhkuqox/+BhzGYvB3Ks6CAOXRzG2QlhV7YwMCNuhVmTCrFoRCSRWYnERADkKF0yLkdKtAAAAAElFTkSuQmCC",
          },
        },
      },
      authors: [
        {
          id: "ff4d1b2c-003e-5abd-a07f-873a9a3c0740",
          authorName: "Paul Mendes",
          authorSlug: "paul-mendes",
          profileImage: {
            file: {
              url: "//images.ctfassets.net/aq13lwl6616q/2FVUcQDBD7KSWwJudGZwcC/b77f697907882030dd9c83216e6e838b/Paul_Mendes.jpg",
            },
          },
        },
      ],
    },
  },
  {
    node: {
      youtubePreviewId: "hJGLFHSPSug",
      totalHours: 14,
      totalLessons: 180,
      courseTitle: "Deno: The Complete Guide Zero to Mastery",
      courseExcerpt:
        "Will Deno replace NodeJS?! Probably not, but it will have its place. Ryan Dahl (the creator) made major improvements from Node vs. Deno. This course will teach you everything you need to become a Deno Developer!",
      courseUrl: "/courses/learn-deno/",
      coursePopularity: 31,
      lastUpdatedOn: "2022-04-26",
      filterTopics: ["Backend Development", "Web Development"],
      filterLevels: ["Intermediate"],
      createdAt: "2020-05-22T11:55:15.978Z",
      badge: {
        contentfulid: "intermediate",
        title: "Intermediate",
        color: "#677BFA",
      },
      courseImage: {
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=100&h=56&q=100&fm=webp&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=200&h=113&q=100&fm=webp&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=400&h=225&q=100&fm=webp&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=800&h=450&q=100&fm=webp&bg=transparent 800w",
                sizes: "(min-width: 400px) 400px, 100vw",
                type: "image/webp",
              },
            ],
            fallback: {
              src: "https://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=400&h=225&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=100&h=56&q=100&fm=png&bg=transparent 100w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=200&h=113&q=100&fm=png&bg=transparent 200w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=400&h=225&q=100&fm=png&bg=transparent 400w,\\nhttps://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=800&h=450&q=100&fm=png&bg=transparent 800w",
              sizes: "(min-width: 400px) 400px, 100vw",
            },
          },
          layout: "constrained",
          backgroundColor: "transparent",
          width: 400,
          height: 225,
          placeholder: {
            fallback:
              "data:image/png;base64,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",
          },
        },
      },
      authors: [
        {
          id: "4d5c862b-44a8-5601-9e3a-6a288cfd97c2",
          authorName: "Adam Odziemkowski",
          authorSlug: "adam-odziemkowski",
          profileImage: {
            file: {
              url: "//images.ctfassets.net/aq13lwl6616q/719IZvU4LVWt9rECcR0oG3/a0da40259fde3f116d7e419d5536e86d/bdIvNmsR_400x400.jpg",
            },
          },
        },
        {
          id: "54ef815a-346c-5e46-995b-f3c89bf44bd0",
          authorName: "Andrei Neagoie",
          authorSlug: "andrei-neagoie",
          profileImage: {
            file: {
              url: "//images.ctfassets.net/aq13lwl6616q/3jyqzyDMgKDqWLua869Q0Z/86124d5fbcfc747a0348e631aba7c0f6/andrei.jpg",
            },
          },
        },
      ],
    },
  },
];

export default data;
