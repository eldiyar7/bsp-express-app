$(document).ready(function () {


    $.validator.addMethod('isMoney', function (value, element) {
        return /^\d{0,4}(\.\d{0,2})?$/.test(value);
    }, "not valid, please enter number ex: 1250");

    $.validator.addMethod('isPhoneNumber', function (value, element) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
    }, "not valid, please enter valid number ex: 847-226-4698");

    $.validator.addMethod('isSocialSecurityNumber', function (value, element) {
        return /^\d{3}-\d{2}-\d{4}$/.test(value);
    }, "not valid, please enter correct format ex: 333-22-4444");


    $('#application-form').validate({
        rules: {
            apartment: {         // rental details section validation
                required: true
            },

            leaseStart: {
                required: true
            },

            rent: {
                required: true,
                isMoney: true
            },

            securityDeposit: {
                required: true,
                isMoney: true
            },

            keyDeposit: {
                required: true,
                isMoney: true
            },

            fullName: {
                required: true
            },

            emailAddress: {
                required: true
            },

            phoneNumber: {
                required: true,
                isPhoneNumber: true
            },

            socialSecurityNumber: {
                required: true,
                isSocialSecurityNumber: true
            },

            dateOfBirth: {
                required: true
            },

            driverLicense: {
                required: true
            },

            emergencyContactName: {
                required: true,
            },

            emergencyContactPhoneNumber: {
                required: true,
                isPhoneNumber: true
            },

            // Personal Finance Information Section Validation
            weeklyIncome: {
                required: true,
                isMoney: true
            },

            otherSourceOfIncomeAmount: {
                isMoney: true
            },

            savingsBalance: {
                isMoney: true
            },

            checkingBalance: {
                isMoney: true
            },
            //  Expense Information Section Validation
            childOrAlimonySupportAmount: {
                isMoney: true
            },

            totalCreditCardDebtAndPayments: {
                isMoney: true
            },

            monthlyCarPayment: {
                isMoney: true
            },

            agreeTermsAndConditions: {
                required: true
            }

        },

        highlight: function (element, errorClass) {
            $(element).closest('.form-group').addClass('has-error');
        },

        unhighlight: function (element, errorClass) {
            $(element).closest('.form-group').removeClass('has-error');
        },

        errorPlacement: function (error, element) {
            error.appendTo(element.parent().parent());
        },

        submitHandler: function (form) {
            var formData = $(form).serialize();
            console.log(formData);
            $.ajax({
                type: 'POST',
                url: '/application',
                data: JSON.stringify({formData}),
                dataType: 'json',
                contentType : 'application/json',
                success: function (data) {
                    alert('success');
                },
                error : function (error) {
                    console.log(error);
                }
            })
        }


    })


});