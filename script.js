$(document).ready(function () {
    var number = "";
    var oldNumber = "";
    var numberOfDigits = 0;
    var fourModeOperation = new Array(false, false, false, false, false); // bolme, carpma, cikarma, toplama, kilit
    var operationChoice = -1;
    var firstResult = false;
    //
    //  NUMARALARA BASILDI
    $(".number").click(function () {
        if (firstResult) {
            firstResult = false;
            number = "";
        }
        if (number.length >= 9) alert("9 haneden fazla sayi girilemez.");
        else if (number.charAt(0) == "0") {
            number = $(this).text();
            $(".screen").text(number);
        }
        else {
            number += $(this).text();
            $(".screen").text(number);
        }
    });
    //
    //  SIL TUSUNA BASILDI
    $("#delete").click(function () {
        number = String(number).substring(0, number.length - 1);
        $(".screen").text(number);
    });
    //
    //  TEMIZLE TUSUNA BASILDI
    $("#clear").click(function () {
        number = "";
        oldNumber = "";
        firstResult = false;
        clearScreen();
    });
    function clearScreen() {
        $(".screen").text("");
    }
    //
    //  BOLME TUSUNA BASILDI
    $("#division").click(function () {
        if (!fourModeOperation[4]) {
            fourModeOperation[0] = true; // bolme aktif
            fourModeOperation[4] = true; // kilit aktif
            oldNumber = number;
            number = "";
            clearScreen();
        }
        else alert("Onceki islemi tamamlayiniz.");
    });
    //
    //  CARPMA TUSUNA BASILDI
    $("#multiple").click(function () {
        if (!fourModeOperation[4]) {
            fourModeOperation[1] = true; // carpma aktif
            fourModeOperation[4] = true; // kilit aktif
            oldNumber = number;
            number = "";
            clearScreen();
        }
        else alert("Onceki islemi tamamlayiniz.");
    });
    //
    //  CIKARMA TUSUNA BASILDI
    $("#minus").click(function () {
        if (!fourModeOperation[4]) {
            fourModeOperation[2] = true; // cikarma aktif
            fourModeOperation[4] = true; // kilit aktif
            oldNumber = number;
            number = "";
            clearScreen();
        }
        else alert("Onceki islemi tamamlayiniz.");
    });
    //
    //  TOPLAMA TUSUNA BASILDI
    $("#plus").click(function () {
        if (!fourModeOperation[4]) {
            fourModeOperation[3] = true; // toplama aktif
            fourModeOperation[4] = true; // kilit aktif
            oldNumber = number;
            number = "";
            clearScreen();
        }
        else alert("Onceki islemi tamamlayiniz.");
    });
    //
    //  ESITTIR TUSUNA BASILDI
    $("#equal").click(function () {
        firstResult = true;
        for (let i = 0; i < fourModeOperation.length - 1; i++) {
            if (fourModeOperation[i]) {
                operationChoice = i;
                break;
            }
        }
        fourModeOperation[operationChoice] = false;
        fourModeOperation[4] = false;
        switch (operationChoice) {
            case 0:
                numberOfDigits = number.length;
                oldNumber = Number(oldNumber) / Number(number);
                if (Number(number) == 0) {
                    alert("Sifira bolunemez!");
                    oldNumber = 0;
                }
                resultPrintScreen();
                break;
            case 1:
                oldNumber = Number(oldNumber) * Number(number);
                resultPrintScreen();
                break;
            case 2:
                oldNumber = Number(oldNumber) - Number(number);
                resultPrintScreen();
                break;
            case 3:
                oldNumber = Number(oldNumber) + Number(number);
                resultPrintScreen();
                break;
            default:
                break;
        }
        number = oldNumber;
    });
    function resultPrintScreen() {
        if (String(oldNumber).length > 9)
            if (String(oldNumber).length >= 10 && numberOfDigits > 7)
                $(".screen").text(Number(oldNumber).toFixed(2));
            else if (String(oldNumber).length >= 10 && numberOfDigits > 4)
                $(".screen").text(Number(oldNumber).toFixed(4));
            else
                $(".screen").text(Number(oldNumber).toFixed(6));
        else $(".screen").text(oldNumber);
    }
});