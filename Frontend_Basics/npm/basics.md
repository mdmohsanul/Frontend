# What is npm?
- npm is a package manager for node.js that helps to install and manage our project dependencies and provides a huge library for reusable javascript packages.

# What is npx?
- npx is a tool comes with npm which allow us to execute node packages without installing them globally. which avoids version conflicts and save space.

You don’t need to install create vite@latest globally.
It downloads → runs → removes it → no global clutter.

# Difference between npm and yarn?
Both manage dependencies, but Yarn was initially faster and better for monorepos. However, npm has improved a lot and now both are quite similar

# Which is best for development npm or yarn?
Yarn is often preferred in development for better workspace/monorepo support and caching speed.

# Which is best for production?
In production, there is no runtime difference — both output the same final node_modules.

But npm is typically more standard because:
It comes preinstalled with Node
CI/CD pipelines support it widely
No extra setup needed

Short Answer:

In production, npm is more commonly used because it’s default, stable, and widely supported.