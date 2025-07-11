# metadata

- The metadata API in Next.js is a powerful feature that lets us define metadata for each page.
- Metadata ensures out content looks great when it's shared or indexed by search engines.

# Two ways ot handler metadata in layout.tsx or page.tsx files:

1. export a static metadata object
2. export a dynamic generateMetadata function

# Configuring metadata rules

- Both layout.tsx and page.tsx can export metadata. layout metadata applies to all its pages, while page metadata is specific to that page.

- metadata follows a top-down order,starting from the root level

- When metadata exists in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties.

# If we write metadata in pages it overrides the layout metadata

# Dynamic metadata
- used in productDetails page if we want to change the title with each product.
- example in productDetails page

## *** We can't use metadata object and generate metadata in same route segment

## *** Metadata will not work on the pages which is marked as 'use client' .  If you want to use then separate the UI logic (explained in counter folder)


## title metadata

- The title field's primary purpose is to define the document title
- It can be either a string or an object.

# the title metadata object provides us three properties
{
    default: "code mania"
    template: "%s | code mania
    absolute:
}
- default -- If in other pages the metadata is not provided then it will add this default title
- template -- It is useful when we want default title and some dynamic page title
- absolute -- It will override 