::
:: Microsoft Azure SDK for Node - Generate library code
:: Copyright (C) Microsoft Corporation. All Rights Reserved.
::

@echo off
set autoRestVersion=0.14.0-Nightly20160112
if  "%1" == "" (
	set specFile="https://raw.githubusercontent.com/vrmurthy01/azure-rest-api-specs/master/arm-intune/2015-01-14-preview/swagger/intune.json"
) else (
    set specFile="%1"
)
set repoRoot=%~dp0..\..\..\
set generateFolder=%~dp0lib\

if exist %generateFolder% rd /S /Q  %generateFolder%
call "%repoRoot%\tools\autorest.gen.cmd" %specFile% Microsoft.Azure.Management.Intune %autoRestVersion% %generateFolder%
