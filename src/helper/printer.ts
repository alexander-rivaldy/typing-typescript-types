
export const printTitle = (title: string): void => {
    console.log('\n-=-=-=-=-=-=-=')
    console.log(title)
    console.log('-=-=-=-=-=-=-=\n')
}

export const printVar = (text: string, variable: any): void => {
    console.log(`\n\n${text}:`, variable)
}