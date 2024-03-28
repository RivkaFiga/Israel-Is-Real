const isNameValid = function(key) {
    return (key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key === ' '
}

const isNumberValid = function(key) {
     return (key >= '0' && key <= '9' || key === 'Backspace') 
}
validation