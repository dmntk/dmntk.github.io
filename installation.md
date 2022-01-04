##### [Home](README.md)

# Installation

**DMNTK** is a single executable file.

Binary version of **DMNTK** may be:
- obtained directly from [GitHub releases](https://github.com/dmntk/dmntk.rs/releases),
- installed using [cargo](https://doc.rust-lang.org/cargo/),
- or built from [source](https://github.com/dmntk/dmntk.rs).

## Obtaining precompiled version of DMNTK

Currently, two binary versions of **DMNTK** are compiled during each release:
- Windows™ 10,
- Fedora Linux 35, 

These binary files are available directly from [DMNTK releases](https://github.com/dmntk/dmntk.rs/releases).

When other target platform is required, please install **dmntk** using `cargo` or compile from source. 

## Installing DMNTK using `cargo`

To install **dmntk** using `cargo`, type the following command:

```
$ cargo install dmntk
```

## Compiling DMNTK from source

To compile **dmntk** from source, clone the GIT repository and build:

```
$ git clone https://github.com/dmntk/dmntk.rs.git
$ cd dmntk.rs
$ cargo build --release
```

##### [Home](README.md)

{% include footer.html %}
