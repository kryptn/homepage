---
title: "Dimensional Range"
date: 2018-09-12T17:30:33-06:00
type: post
draft: false
tags: ["methods",]
---

This method generates every coordinate between `c1=(x1, x2, ..., xn)` and `c2=(y1, y2, ..., yn)` as long as `len(c1) == len(c2)`.

```python
def any_range(c1, c2):
    assert len(c1) == len(c2)
    x, *c1 = c1
    y, *c2 = c2
    lower, upper = [(x, y), (y, x)][x > y]
    for n in range(lower, upper + 1):
        if not (c1 and c2):
            yield (n,)
        else:
            for down in any_range(c1, c2):
                yield (n, *down)
```

```python
from pprint import pprint

In [9]: pprint(list(any_range((-2,4),(2,2))))
[(-2, 2),
 (-2, 3),
 (-2, 4),
 (-1, 2),
 (-1, 3),
 (-1, 4),
 (0, 2),
 (0, 3),
 (0, 4),
 (1, 2),
 (1, 3),
 (1, 4),
 (2, 2),
 (2, 3),
 (2, 4)]
 ```