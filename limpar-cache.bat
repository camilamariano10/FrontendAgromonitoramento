@echo off
echo Limpando cache do Angular...
rmdir /s /q .angular\cache 2>nul || echo Cache já estava limpo ou não existe
echo Cache limpo!
pause
