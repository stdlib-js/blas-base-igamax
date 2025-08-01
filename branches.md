<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Branches

This repository has the following branches:

-   **main**: default branch generated from the [stdlib project][stdlib-url], where all development takes place.
-   **production**: [production build][production-url] of the package (e.g., reformatted error messages to reduce bundle sizes and thus the number of bytes transmitted over a network).
-   **esm**: [ES Module][esm-url] branch for use via a `script` tag without the need for installation and bundlers (see [README][esm-readme]).
-   **deno**: [Deno][deno-url] branch for use in Deno (see [README][deno-readme]).
-   **umd**: [UMD][umd-url] branch for use in Observable, or in dual browser/Node.js environments (see [README][umd-readme]).

The following diagram illustrates the relationships among the above branches:

```mermaid
graph TD;
A[stdlib]-->|generate standalone package|B;
B[main] -->|productionize| C[production];
C -->|bundle| D[esm];
C -->|bundle| E[deno];
C -->|bundle| F[umd];

%% click A href "https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/base/igamax"
%% click B href "https://github.com/stdlib-js/blas-base-igamax/tree/main"
%% click C href "https://github.com/stdlib-js/blas-base-igamax/tree/production"
%% click D href "https://github.com/stdlib-js/blas-base-igamax/tree/esm"
%% click E href "https://github.com/stdlib-js/blas-base-igamax/tree/deno"
%% click F href "https://github.com/stdlib-js/blas-base-igamax/tree/umd"
```

[stdlib-url]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/base/igamax
[production-url]: https://github.com/stdlib-js/blas-base-igamax/tree/production
[deno-url]: https://github.com/stdlib-js/blas-base-igamax/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-igamax/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-igamax/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-igamax/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-igamax/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-igamax/blob/esm/README.md