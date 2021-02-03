export const printBizList = (attractionResult) => {
    return `
    <li><a class="dropdown-item" href="biz-${attractionResult.id}">${attractionResult.name}</a></li>
    `
};