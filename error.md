2025-02-26T15:32:16.639195Z Cloning repository...
2025-02-26T15:32:17.311535Z From https://github.com/rahulyyadav/portfolio
2025-02-26T15:32:17.31204Z * branch f38bb88b32ea0876ff13afd3fc21f0175dccb1fe -> FETCH_HEAD
2025-02-26T15:32:17.312149Z
2025-02-26T15:32:17.343718Z HEAD is now at f38bb88 updated project
2025-02-26T15:32:17.344272Z
2025-02-26T15:32:17.426534Z
2025-02-26T15:32:17.427271Z Using v2 root directory strategy
2025-02-26T15:32:17.451677Z Success: Finished cloning repository files
2025-02-26T15:32:19.186302Z Checking for configuration in a Wrangler configuration file (BETA)
2025-02-26T15:32:19.186828Z
2025-02-26T15:32:20.292425Z No wrangler.toml file found. Continuing.
2025-02-26T15:32:20.375121Z Detected the following tools from environment: nodejs@18.18.0, npm@9.6.7
2025-02-26T15:32:20.375681Z Installing nodejs 18.18.0
2025-02-26T15:32:21.29615Z Trying to update node-build... ok
2025-02-26T15:32:21.406974Z To follow progress, use 'tail -f /tmp/node-build.20250226153221.490.log' or pass --verbose
2025-02-26T15:32:21.515767Z Downloading node-v18.18.0-linux-x64.tar.gz...
2025-02-26T15:32:21.750943Z -> https://nodejs.org/dist/v18.18.0/node-v18.18.0-linux-x64.tar.gz
2025-02-26T15:32:23.689125Z
2025-02-26T15:32:23.689698Z WARNING: node-v18.18.0-linux-x64 is in LTS Maintenance mode and nearing its end of life.
2025-02-26T15:32:23.68984Z It only receives *critical* security updates, *critical\* bug fixes and documentation updates.
2025-02-26T15:32:23.690187Z
2025-02-26T15:32:23.690332Z Installing node-v18.18.0-linux-x64...
2025-02-26T15:32:24.11229Z Installed node-v18.18.0-linux-x64 to /opt/buildhome/.asdf/installs/nodejs/18.18.0
2025-02-26T15:32:24.112576Z
2025-02-26T15:32:25.200444Z Installing project dependencies: npm clean-install --progress=false
2025-02-26T15:32:26.948192Z npm ERR! code ERESOLVE
2025-02-26T15:32:26.950644Z npm ERR! ERESOLVE unable to resolve dependency tree
2025-02-26T15:32:26.951007Z npm ERR!
2025-02-26T15:32:26.951159Z npm ERR! While resolving: portfolio@0.1.0
2025-02-26T15:32:26.951287Z npm ERR! Found: react@19.0.0
2025-02-26T15:32:26.95141Z npm ERR! node_modules/react
2025-02-26T15:32:26.951482Z npm ERR! react@"^19.0.0" from the root project
2025-02-26T15:32:26.951688Z npm ERR!
2025-02-26T15:32:26.951775Z npm ERR! Could not resolve dependency:
2025-02-26T15:32:26.951929Z npm ERR! peer react@"^18.2.0" from next@14.0.0
2025-02-26T15:32:26.952155Z npm ERR! node_modules/next
2025-02-26T15:32:26.952482Z npm ERR! next@"14.0.0" from the root project
2025-02-26T15:32:26.952738Z npm ERR!
2025-02-26T15:32:26.952851Z npm ERR! Fix the upstream dependency conflict, or retry
2025-02-26T15:32:26.953228Z npm ERR! this command with --force or --legacy-peer-deps
2025-02-26T15:32:26.953333Z npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
2025-02-26T15:32:26.953442Z npm ERR!
2025-02-26T15:32:26.953696Z npm ERR!
2025-02-26T15:32:26.953952Z npm ERR! For a full report see:
2025-02-26T15:32:26.954059Z npm ERR! /opt/buildhome/.npm/\_logs/2025-02-26T15_32_25_717Z-eresolve-report.txt
2025-02-26T15:32:26.954176Z
2025-02-26T15:32:26.954291Z npm ERR! A complete log of this run can be found in: /opt/buildhome/.npm/\_logs/2025-02-26T15_32_25_717Z-debug-0.log
2025-02-26T15:32:26.970139Z Error: Exit with error code: 1
2025-02-26T15:32:26.970431Z at ChildProcess.<anonymous> (/snapshot/dist/run-build.js)
2025-02-26T15:32:26.970539Z at Object.onceWrapper (node:events:652:26)
2025-02-26T15:32:26.970632Z at ChildProcess.emit (node:events:537:28)
2025-02-26T15:32:26.970727Z at ChildProcess.\_handle.onexit (node:internal/child_process:291:12)
2025-02-26T15:32:26.981093Z Failed: build command exited with code: 1
2025-02-26T15:32:27.681953Z Failed: error occurred while running build command
