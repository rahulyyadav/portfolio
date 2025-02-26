2025-02-26T15:36:57.044089Z Cloning repository...
2025-02-26T15:36:57.73377Z From https://github.com/rahulyyadav/portfolio
2025-02-26T15:36:57.734676Z * branch 9086d82acdc4e91ca71cc9aba5e9c6c6a20a1cca -> FETCH_HEAD
2025-02-26T15:36:57.735066Z
2025-02-26T15:36:57.764438Z HEAD is now at 9086d82 updated project
2025-02-26T15:36:57.764923Z
2025-02-26T15:36:57.841616Z
2025-02-26T15:36:57.842065Z Using v2 root directory strategy
2025-02-26T15:36:57.863757Z Success: Finished cloning repository files
2025-02-26T15:36:59.386819Z Checking for configuration in a Wrangler configuration file (BETA)
2025-02-26T15:36:59.387603Z
2025-02-26T15:37:00.483576Z No wrangler.toml file found. Continuing.
2025-02-26T15:37:00.557339Z Detected the following tools from environment: nodejs@18.18.0, npm@9.6.7
2025-02-26T15:37:00.557854Z Installing nodejs 18.18.0
2025-02-26T15:37:01.39666Z Trying to update node-build... ok
2025-02-26T15:37:01.493186Z To follow progress, use 'tail -f /tmp/node-build.20250226153701.490.log' or pass --verbose
2025-02-26T15:37:01.587256Z Downloading node-v18.18.0-linux-x64.tar.gz...
2025-02-26T15:37:01.82206Z -> https://nodejs.org/dist/v18.18.0/node-v18.18.0-linux-x64.tar.gz
2025-02-26T15:37:03.57093Z
2025-02-26T15:37:03.571285Z WARNING: node-v18.18.0-linux-x64 is in LTS Maintenance mode and nearing its end of life.
2025-02-26T15:37:03.571427Z It only receives *critical* security updates, *critical\* bug fixes and documentation updates.
2025-02-26T15:37:03.571537Z
2025-02-26T15:37:03.571683Z Installing node-v18.18.0-linux-x64...
2025-02-26T15:37:03.973259Z Installed node-v18.18.0-linux-x64 to /opt/buildhome/.asdf/installs/nodejs/18.18.0
2025-02-26T15:37:03.973739Z
2025-02-26T15:37:04.977466Z Installing project dependencies: npm clean-install --progress=false
2025-02-26T15:37:16.046523Z
2025-02-26T15:37:16.046775Z added 370 packages, and audited 371 packages in 11s
2025-02-26T15:37:16.047483Z
2025-02-26T15:37:16.047621Z 142 packages are looking for funding
2025-02-26T15:37:16.047729Z run `npm fund` for details
2025-02-26T15:37:16.048893Z
2025-02-26T15:37:16.049143Z found 0 vulnerabilities
2025-02-26T15:37:16.071563Z Executing user command: npx @cloudflare/next-on-pages@1
2025-02-26T15:37:17.203277Z npm WARN exec The following package was not found and will be installed: @cloudflare/next-on-pages@1.13.8
2025-02-26T15:37:23.439405Z npm WARN deprecated rollup-plugin-inject@3.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-inject.
2025-02-26T15:37:23.57644Z npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
2025-02-26T15:37:23.802905Z npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-02-26T15:37:24.468087Z npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-02-26T15:37:24.749712Z npm WARN deprecated uuid@3.3.2: Please upgrade to version 7 or higher. Older versions may use Math.random() in certain circumstances, which is known to be problematic. See https://v8.dev/blog/math-random for details.
2025-02-26T15:37:29.543892Z ⚡️ @cloudflare/next-on-pages CLI v.1.13.8
2025-02-26T15:37:29.943987Z ⚡️ Detected Package Manager: npm (9.8.1)
2025-02-26T15:37:29.944249Z ⚡️ Preparing project...
2025-02-26T15:37:29.94795Z ⚡️ Project is ready
2025-02-26T15:37:29.948194Z ⚡️ Building project...
2025-02-26T15:37:31.134683Z ▲ npm WARN exec The following package was not found and will be installed: vercel@41.2.2
2025-02-26T15:37:33.496327Z ▲ npm
2025-02-26T15:37:33.496591Z ▲ WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-02-26T15:37:33.591608Z ▲ npm WARN
2025-02-26T15:37:33.592147Z ▲ deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-02-26T15:37:33.698492Z ▲ npm
2025-02-26T15:37:33.698975Z ▲ WARN deprecated uuid@3.3.2: Please upgrade to version 7 or higher. Older versions may use Math.random() in certain circumstances, which is known to be problematic. See https://v8.dev/blog/math-random for details.
2025-02-26T15:37:34.921189Z ▲ Vercel CLI 41.2.2
2025-02-26T15:37:34.92993Z ▲ > NOTE: The Vercel CLI now collects telemetry regarding usage of the CLI.
2025-02-26T15:37:34.930225Z ▲ > This information is used to shape the CLI roadmap and prioritize features.
2025-02-26T15:37:34.930384Z ▲ > You can learn more, including how to opt-out if you'd not like to participate in this program, by visiting the following URL:
2025-02-26T15:37:34.930495Z ▲ > https://vercel.com/docs/cli/about-telemetry
2025-02-26T15:37:35.207543Z ▲ Installing dependencies...
2025-02-26T15:37:36.158208Z ▲ up to date in 640ms
2025-02-26T15:37:36.158531Z ▲ 142 packages are looking for funding
2025-02-26T15:37:36.158892Z ▲ run `npm fund` for details
2025-02-26T15:37:36.170777Z ▲ Detected Next.js version: 14.2.24
2025-02-26T15:37:36.17563Z ▲ Running "npm run build"
2025-02-26T15:37:36.563693Z ▲ > portfolio@0.1.0 build
2025-02-26T15:37:36.564036Z ▲ > next build
2025-02-26T15:37:37.215509Z ▲  
2025-02-26T15:37:37.215963Z ▲ > Build error occurred
2025-02-26T15:37:37.217852Z ▲ Error: Configuring Next.js via 'next.config.ts' is not supported. Please replace the file with 'next.config.js' or 'next.config.mjs'.
2025-02-26T15:37:37.218009Z ▲ at loadConfig (/opt/buildhome/repo/node_modules/next/dist/server/config.js:800:19)
2025-02-26T15:37:37.218162Z ▲ at async Span.traceAsyncFn (/opt/buildhome/repo/node_modules/next/dist/trace/trace.js:154:20)
2025-02-26T15:37:37.218278Z ▲ at async /opt/buildhome/repo/node_modules/next/dist/build/index.js:374:28
2025-02-26T15:37:37.218505Z ▲ at async Span.traceAsyncFn (/opt/buildhome/repo/node_modules/next/dist/trace/trace.js:154:20)
2025-02-26T15:37:37.21861Z ▲ at async build (/opt/buildhome/repo/node_modules/next/dist/build/index.js:368:9)
2025-02-26T15:37:37.241595Z ▲ Error: Command "npm run build" exited with 1
2025-02-26T15:37:37.377416Z
2025-02-26T15:37:37.377707Z ⚡️ The Vercel build (`npx vercel build`) command failed. For more details see the Vercel logs above.
2025-02-26T15:37:37.377831Z ⚡️ If you need help solving the issue, refer to the Vercel or Next.js documentation or their repositories.
2025-02-26T15:37:37.377908Z
2025-02-26T15:37:37.420811Z Failed: Error while executing user command. Exited with error code: 1
2025-02-26T15:37:37.432201Z Failed: build command exited with code: 1
2025-02-26T15:37:38.11283Z Failed: error occurred while running build command
