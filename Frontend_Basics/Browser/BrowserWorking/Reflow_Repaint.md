# Difference between Reflow and Repaint

- Repaint and Reflow are the two steps browser performs when rendering and updating the webpage. This happens when the DOM or CSS changes

1. Reflow (layout)
- Reflow happens when the layout of the page needs to be calculated again.

What triggers Reflow
- when position changes (top, bottom, left, right)
- when size changes (width, height, padding, margin, border)
- display:none
- changing fonts
- adding / removing elements

Reflow is expensive because it affects the entire page and the browser needs to recalculate the element size and position

2. Repaint
Repaint happens when the layout is known, but something about the appearance changes

What triggers Repaint
- when background color changes
- shadow changes
- changing colors
- visbility:hidden

Repaint is less expensive because browsers redraws pixels without recalculating layout.

| Feature      | Reflow (Layout)                  | Repaint (Redraw)                |
| ------------ | -------------------------------- | ------------------------------- |
| Triggered by | Layout changes                   | Visual style changes only       |
| Examples     | width, height, position          | color, background, shadows      |
| Cost         | **High** (may affect whole page) | **Medium** (only redraw needed) |
| Performance  | Worse                            | Better                          |


# Core Web Vitals

- It is a set of performance metrices google measure from real-world experience of your website

- Largest Content Paintful (Loading Performance)

- Cumulative Layout Shift (Visual Activity)
 
- Interaction to next paint (Interactivity)