import styled, {css, injectGlobal} from 'styled-components'

const styles = {
    base: `
        html {
          font-size: 62.5%; }
        body {
          font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */
          line-height: 1.6;
          font-weight: 400;
          font-family: HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
          color: #222; }
    `,
    typography: `
        h1, h2, h3, h4, h5, h6 {
            margin-top: 0;
            margin-bottom: 2rem;
            font-weight: 300; }
            h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
        h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
        h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
        h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
        h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
        h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }

        /* Larger than phablet */
        @media (min-width: 550px) {
            h1 { font-size: 5.0rem; }
            h2 { font-size: 4.2rem; }
            h3 { font-size: 3.6rem; }
            h4 { font-size: 3.0rem; }
            h5 { font-size: 2.4rem; }
            h6 { font-size: 1.5rem; }
        }

        p {
          margin-top: 0; }
    `,
    buttons: `
        .button,
        button,
        input[type="submit"],
        input[type="reset"],
        input[type="button"] {
          display: inline-block;
          height: 38px;
          padding: 0 30px;
          color: #555;
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          line-height: 38px;
          letter-spacing: .1rem;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          background-color: transparent;
          border-radius: 4px;
          border: 1px solid #bbb;
          cursor: pointer;
          box-sizing: border-box; }
        .button:hover,
        button:hover,
        input[type="submit"]:hover,
        input[type="reset"]:hover,
        input[type="button"]:hover,
        .button:focus,
        button:focus,
        input[type="submit"]:focus,
        input[type="reset"]:focus,
        input[type="button"]:focus {
          color: #333;
          border-color: #888;
          outline: 0; }
        .button.button-primary,
        button.button-primary,
        input[type="submit"].button-primary,
        input[type="reset"].button-primary,
        input[type="button"].button-primary {
          color: #FFF;
          background-color: #33C3F0;
          border-color: #33C3F0; }
        .button.button-primary:hover,
        button.button-primary:hover,
        input[type="submit"].button-primary:hover,
        input[type="reset"].button-primary:hover,
        input[type="button"].button-primary:hover,
        .button.button-primary:focus,
        button.button-primary:focus,
        input[type="submit"].button-primary:focus,
        input[type="reset"].button-primary:focus,
        input[type="button"].button-primary:focus {
          color: #FFF;
          background-color: #1EAEDB;
          border-color: #1EAEDB; }

    `,
    lists: `
        ul {
          list-style: circle inside; }
        ol {
          list-style: decimal inside; }
        ol, ul {
          padding-left: 0;
          margin-top: 0; }
        ul ul,
        ul ol,
        ol ol,
        ol ul {
          margin: 1.5rem 0 1.5rem 3rem;
          font-size: 90%; }
        li {
          margin-bottom: 1rem; }
    `
}

styles['all'] = Object.keys(styles)
    .filter(s => s !== 'all' && s !== 'normalize')
    .map(s => styles[s])
    .join()

const sizes = {
    1: 4.66666666667,
    2: 13.3333333333,
    3: 22,
    4: 30.6666666667,
    5: 39.3333333333,
    6: 48,
    7: 56.6666666667,
    8: 65.3333333333,
    9: 74.0,
    10: 82.6666666667,
    11: 91.3333333333,
    12: 100,
    [1/3]: 30.6666666667,
    [2/3]: 65.3333333333,
    [1/2]: 48
}

const offsets = {
    1: 8.66666666667,
    2: 17.3333333333,
    3: 26,
    4: 34.6666666667,
    5: 43.3333333333,
    6: 52,
    7: 60.6666666667,
    8: 69.3333333333,
    9: 78.0,
    10: 86.6666666667,
    11: 95.33333333333,
    [1/3]: 34.6666666667,
    [2/3]: 69.33333333333,
    [1/2]: 52
}

export const breakpoints = {
    mobile: "400px",
    phablet: "550px",
    tablet: "750px",
    desktop: "100px",
    desktophd: "1200px"
}

export const breakpoint = label => (...args) => css`
    @media (min-width: ${breakpoints[label] || label}) {
        ${css(...args)}
    }
`

for (const label in breakpoints) {
    breakpoint[label] = breakpoint(label)
}

export const clearfix = `
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;

    ${breakpoint.mobile`
        width: 85%;
        padding: 0;
    `}

    ${breakpoint.phablet`
        width: 80%;
    `}

    ${clearfix}
`

// Just `div` with clearfix :-)
export const Row = styled.div`${clearfix}`

export const Column = styled.div`
    width: 100%;
    float: left;
    box-sizing: border-box;

    @media (min-width: ${breakpoints.phablet}) {
        margin-left: ${p => p.count === 12 ? 0 : '4%'};
        width: ${p => sizes[p.count || 1]}%;
        &:first-child {
            margin-left: 0;
        }
    }
`

export const OffestBy = styled.div`
    margin-left: ${p => offsets[p.count||1]}%;
`

// Browser only
export default function injectSkeleton(toInject) {
    const joined = (toInject || ['normlize', 'all'])
        .map(s => styles[s])
        .join()

    injectGlobal`${toInject}`
}
