export const createDateFormat = (dateContent) => {
    let dateArray = dateContent.split('-');

    const monthArray = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return (
        dateArray[2] +
        '-' +
        monthArray[parseInt(dateArray[1]) - 1] +
        '-' +
        dateArray[0]
    );
};
