import styled, {css, injectGlobal} from 'styled-components'

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
// const offsets = {}

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

// Browser only!
export default function setupSkeleton(opts) {
    const {
        normalize = false,
        typography = true,
        forms = true,
        lists = code,

    } = opts || {}

    injectGlobal()
}

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
`

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
