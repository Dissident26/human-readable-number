module.exports = function toReadable(number) {
    let words = [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'],
        ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']
    ];

    if ( number < 15 ) {
        return words[0][number]
    } else if ( number < 20 ) {
        return words[1][Math.floor( number - 10 ) - 2] + 'teen';
    } else if ( number < 100) {
        return ( number % 10 == 0 ) ? words[1][Math.floor( number / 10 ) - 2] + 'ty' : words[1][Math.floor( number / 10 ) - 2] + 'ty' + " " + words[0][number % 10];
    } else {
        return ( number % 100 == 0 ) ? words[0][Math.floor( number / 100 )] + ' ' + 'hundred' :
        words[0][Math.floor( number / 100 )] + ' ' + 'hundred' + " " + toReadable( number % 100 );
    }
};