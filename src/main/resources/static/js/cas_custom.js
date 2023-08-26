$('#togglePassword').click(() => {
    const input = $('#password');
    const toggleIcon = $('#togglePasswordIcon');
    const inputType = input.attr('type');

    if (inputType === 'password') {
        input.attr('type', 'text');
        if (toggleIcon) {
            toggleIcon.addClass('mdi-eye-off').removeClass('mdi-eye');
        }
        return;
    }
    input.attr('type', 'password');
    if (toggleIcon) {
        toggleIcon.addClass('mdi-eye').removeClass('mdi-eye-off');
    }
});