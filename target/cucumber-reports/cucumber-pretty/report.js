$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Funcionalidad de agregar producto al carrito de compras",
  "description": "",
  "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Carrito de compras con un producto",
  "description": "",
  "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Se carga la página de búsqueda",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Buscamos el término \"\u003cterm\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Agregamos el producto en el carrito de compras",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Se verifica que el carrito muestre \"1\" producto",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto;",
  "rows": [
    {
      "cells": [
        "term"
      ],
      "line": 9,
      "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto;;1"
    },
    {
      "cells": [
        "skirt"
      ],
      "line": 10,
      "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto;;2"
    },
    {
      "cells": [
        "1233dd"
      ],
      "line": 11,
      "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto;;3"
    },
    {
      "cells": [
        "blouse"
      ],
      "line": 12,
      "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2899043664,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Carrito de compras con un producto",
  "description": "",
  "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Se carga la página de búsqueda",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Buscamos el término \"skirt\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Agregamos el producto en el carrito de compras",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Se verifica que el carrito muestre \"1\" producto",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.seCargaLaPáginaDeBúsqueda()"
});
formatter.result({
  "duration": 11735945888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skirt",
      "offset": 21
    }
  ],
  "location": "Search.buscamosElTérmino(String)"
});
formatter.result({
  "duration": 2055300437,
  "status": "passed"
});
formatter.match({
  "location": "Search.agregarElProductoEnElCarritoDeCompras()"
});
formatter.result({
  "duration": 990938824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "Search.seVerificaQueElCarritoMuestreProducto(String)"
});
formatter.result({
  "duration": 105527325,
  "status": "passed"
});
formatter.after({
  "duration": 1123877736,
  "status": "passed"
});
formatter.before({
  "duration": 3849091655,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Carrito de compras con un producto",
  "description": "",
  "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Se carga la página de búsqueda",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Buscamos el término \"1233dd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Agregamos el producto en el carrito de compras",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Se verifica que el carrito muestre \"1\" producto",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.seCargaLaPáginaDeBúsqueda()"
});
formatter.result({
  "duration": 5967684020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1233dd",
      "offset": 21
    }
  ],
  "location": "Search.buscamosElTérmino(String)"
});
formatter.result({
  "duration": 13308097742,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.cssSelector: i.icon-th-list\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat pageobjects.SearchPage.clickList(SearchPage.java:41)\r\n\tat steps.Search.buscamosElTérmino(Search.java:29)\r\n\tat ✽.When Buscamos el término \"1233dd\"(Search.feature:4)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"i.icon-th-list\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027XT8541T13AW10\u0027, ip: \u0027192.168.158.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\xt8541\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 548c556c88b66526d78ebdc1e6904105\n*** Element info: {Using\u003dcss selector, value\u003di.icon-th-list}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat pageobjects.SearchPage.clickList(SearchPage.java:41)\r\n\tat steps.Search.buscamosElTérmino(Search.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat runners.TestRunner.feature(TestRunner.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:40)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:489)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.agregarElProductoEnElCarritoDeCompras()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "Search.seVerificaQueElCarritoMuestreProducto(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 961584962,
  "status": "passed"
});
formatter.before({
  "duration": 4877898780,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Carrito de compras con un producto",
  "description": "",
  "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Se carga la página de búsqueda",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Buscamos el término \"blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Agregamos el producto en el carrito de compras",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Se verifica que el carrito muestre \"1\" producto",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.seCargaLaPáginaDeBúsqueda()"
});
formatter.result({
  "duration": 6557974839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blouse",
      "offset": 21
    }
  ],
  "location": "Search.buscamosElTérmino(String)"
});
formatter.result({
  "duration": 3701626089,
  "status": "passed"
});
formatter.match({
  "location": "Search.agregarElProductoEnElCarritoDeCompras()"
});
formatter.result({
  "duration": 1597988931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "Search.seVerificaQueElCarritoMuestreProducto(String)"
});
formatter.result({
  "duration": 78925270,
  "status": "passed"
});
formatter.after({
  "duration": 1026830114,
  "status": "passed"
});
});