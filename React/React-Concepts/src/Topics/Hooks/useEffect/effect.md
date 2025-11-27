# useEffect is a React Hook that lets you synchronize a component with an external system.

# to perform side effects and works with event listeners

# runs when component mounts


- What happen when we don't pass dependency array -> react run the effect after every render its a default behavior because react doesn't able able to get that when to run and when not so for the safe side it runs on every render.
- What happen when dependency array is empty


# cleanup function in useEffect
- cleanup functions only run when the components unmount or when the effect re-run

- prevents from race conditions
- remove listeners
- cancel timers
- memory leak

𝟭. 𝗥𝗮𝗰𝗲 𝗰𝗼𝗻𝗱𝗶𝘁𝗶𝗼𝗻𝘀 (𝘁𝗵𝗲 𝗰𝗹𝗮𝘀𝘀𝗶𝗰 𝗯𝘂𝗴)
 • User types fast: “r” → “re” → “rea”.
 • Three API calls fire.
 • The slowest one returns last and overwrites the newest result.
 • User searched “rea” but sees data for “r”.
Why? Old requests weren’t cancelled.

𝟮. 𝗠𝗲𝗺𝗼𝗿𝘆 𝗹𝗲𝗮𝗸𝘀
 • User opens a page → fetch starts.
 • User navigates away → component unmounts.
 • Fetch finishes and tries to update state on a dead component.
 • Console warning. Wasted memory. Slowing app.
Why? Effect kept running after unmount.

𝟯. 𝗧𝗶𝗺𝗲𝗿𝘀 𝘀𝘁𝗮𝗰𝗸𝗶𝗻𝗴
 • Component sets an interval.
 • User navigates away.
 • Interval keeps running.
 • Navigate back → another interval starts.
 • Repeat → app now has 3, 4, 5 intervals running.
 • UI starts freezing.
Why? Intervals never cleared.