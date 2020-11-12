﻿//engine: JScript
//uname: syntax_check_clear
//dname: Очистка перед проверкой
//descr: Очистка окна сообщений перед запуском синтакс-проверки
//author: orefkov
//help: inplace
//addin: stdcommands

/*@
Это небольшой скрипт для очистки окна сообщений перед синтакс-проверкой модуля.
Достаточно просто подключить его - и окно сообщений будет автоматически
очищаться перед синтакс-проверкой.
@*/

// Добавим обработчик команды синтакс-проверки
stdcommands.Frntend.SyntaxCheck.addHandler(function(cmd) {
    if(cmd.isBefore)    // Обработчик вызван перед выполнением команды
    {
        // Есть два способа:
        // либо подключить глобальные контексты и вызвать ОчиститьОкноСообщений:
        // либо просто послать команду очистки окна
        stdcommands.Frntend.ClearMessageWindow.send()
    }
}, "-");

