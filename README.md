# Sagemcom Fast3890

This is also a router from a Swedish Internet operator to find back doors and to see what is under the hood. 

##### I got this router mailed to me as a donation from @anotherman 2022-12-03 - I really have a lot to do but I will check these routers properly this week finally (Week1, 2023). - Thanks alot @anotherman

I saw that there was some information about this router and I tried: [Sagemcom F@ast v3890 Exploit](https://github.com/Lyrebirds/sagemcom-fast-3890-exploit/blob/master/VULNERABLE.md) but unfortunately without results, and I'm not the best at python so I'll have to try my own way eventually, does anyone know if there's already a way to get root on this device then I'd be grateful if you told me how then I'm extremely interested in entering Sagemcom's units.

Here is few things I have checked so far, I will return to this repo asap to get root!! *To be continued*.


![20230102_053416](https://user-images.githubusercontent.com/26827453/210195391-9150afea-9859-4c41-b984-561a94f4ecff.png)


![20230102_054110](https://user-images.githubusercontent.com/26827453/210195657-0cd7c163-f408-44fb-875a-92a7f25724e9.png)

![20230102_054003](https://user-images.githubusercontent.com/26827453/210195624-d99eb7ac-3726-47ff-a382-f7939fa49244.png)

![20230102_054158](https://user-images.githubusercontent.com/26827453/210195695-56472c5e-f7ec-42d6-85b8-42050b39ed74.png)

![20230102_053802](https://user-images.githubusercontent.com/26827453/210195523-4c50643b-4ff9-460b-bfea-4c0456dadff6.png)

![20230102_053254](https://user-images.githubusercontent.com/26827453/210195392-d83f1293-998d-404c-b08b-cdf1e7f5a79e.png)
![20230102_053328](https://user-images.githubusercontent.com/26827453/210195394-5f89694b-89cf-42c0-91f6-8efbbf67838a.png)
![20230102_053344](https://user-images.githubusercontent.com/26827453/210195395-fb25899d-5c0e-4507-b9d7-39cff1ce5ac1.png)
![20230102_053350](https://user-images.githubusercontent.com/26827453/210195398-215b95f9-42c9-4fba-96cf-5264b2767618.png)
![20230102_053359](https://user-images.githubusercontent.com/26827453/210195399-f7027f5a-3a02-4c64-94cc-755cf445d3c2.png)
![20230102_053403](https://user-images.githubusercontent.com/26827453/210195401-644a256c-b456-4d5f-9ae0-ce85e204a7f9.png)
![20230102_053432](https://user-images.githubusercontent.com/26827453/210195402-ecacf1e2-3a78-4775-87d7-86a19f3abcf4.png)
![20230102_053438](https://user-images.githubusercontent.com/26827453/210195404-34f1c194-419a-45a9-88c8-17ee68f76021.png)
![12](https://user-images.githubusercontent.com/26827453/210195415-ce2d1092-7a6d-4dc9-8703-b8eed16524e5.png)
![20230102_053830](https://user-images.githubusercontent.com/26827453/210195612-7532a08d-322f-4ee5-9dd0-27917cb827d0.png)







![20230102_050353](https://user-images.githubusercontent.com/26827453/210194383-215ad918-cd73-4930-afb4-d55743d18349.png)

![20230102_050147](https://user-images.githubusercontent.com/26827453/210194329-a64a55cb-4641-44eb-8b47-a15a74581808.png)
![20230102_045953](https://user-images.githubusercontent.com/26827453/210194334-db9ff7cd-6f1a-4160-aae6-d501d098f7de.png)

![20221204_015103](https://user-images.githubusercontent.com/26827453/210194343-fc8c3d3c-633e-4f1d-bc03-55cfbb41b850.jpg)
![20221204_015049](https://user-images.githubusercontent.com/26827453/210194344-e5549a78-ff22-40e5-aa34-1e2b38337fdf.jpg)
![20221204_015045](https://user-images.githubusercontent.com/26827453/210194345-bfa82023-37db-473d-b023-e9a86ae576b8.jpg)
![20221204_015020](https://user-images.githubusercontent.com/26827453/210194346-8c20cd6a-2b1d-4a4b-a433-390c696e796a.jpg)
![20221204_015012](https://user-images.githubusercontent.com/26827453/210194347-9bc51ae5-3cb6-4aea-b306-81004b206f25.jpg)


![20221202_182356](https://user-images.githubusercontent.com/26827453/210194348-203f44b7-8101-4282-b750-d75fa5360301.jpg)
![20221202_182334](https://user-images.githubusercontent.com/26827453/210194350-d05ba03d-733d-4bcb-8cd1-1276a344bd11.jpg)
![20221202_182250](https://user-images.githubusercontent.com/26827453/210194352-e4cd954b-8ae8-46ba-9aa3-17ec74ec06b4.jpg)

### Default User Login
```
Username: admin
BlockedUser: guest
Maintheme: styles/themes/comhem-main.css
FeatureAccessz: acs, admin, expert, internal, sagemcom
firmwareUpgrade: Device/gen3890v3
```

## Get HW info

### Get Device Name

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.deviceName1);
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.deviceName2);
```

### Priunt CPU Load Usage

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.cpuLoadUsage);
```

### Print Driver Version

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.driverVersion);
```

### Print Hardware Version

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.hardwareVersion);
```

### Print Model Name

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.modelName:);
```

### Print Model NUmber

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.modelNumber);
```

### Print Product Class

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.productClass);
```

### Print Serial NUmber

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.serialNumber);
```

### Print uptime

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.upTime);
```
### Print Software Versin

```bash
$.xmo.getValuesTree($.xpaths.mySagemcomBox.deviceInfo.softwareVersion);
```

### Print current DNS in use
```bash
$.xmo.getValuesTree('Device/DHCPv4/Server/Pools/Pool[@uid="1"]')
```
### Print bootfile names (try download these later)

```bash
$.xmo.getValuesTree('Device/DHCPv4/Server/Pools/Pool[@uid="1"]/BootFileName')
$.xmo.setValuesTree('test', 'Device/DHCPv4/Server/Pools/Pool[@uid="1"]/BootFileName')
```

### Download backup works fine from anywhere on webui

```
$.xmo.saveConfiguration()
```

OR 

```bash
var a = $.xmo.client.newRequest();
$.config.modules.backupConfigurationAllBackup === !0 ? a.downloadSpecificFile($.xpaths.mySagemcomBox.maintenance.saveRestore.save, "device.cfg", 1, function() {}, function(a) {}) : a.downloadFile($.xpaths.mySagemcomBox.maintenance.saveRestore.save, function() {}, function(a) {}),
    a.send()
```


### Get all settings via xpath
```javascript
$.xmo.getValuesTree($.xpaths.accessControl);
$.xmo.getValuesTree($.xpaths.accessControl.firewall);
$.xmo.getValuesTree($.xpaths.accessControl.firewall.enable);
$.xmo.getValuesTree($.xpaths.adminAdvanced);
$.xmo.getValuesTree($.xpaths.adminAdvanced.passwd);
$.xmo.getValuesTree($.xpaths.advanced);
$.xmo.getValuesTree($.xpaths.arp);
$.xmo.getValuesTree($.xpaths.availability);
$.xmo.getValuesTree($.xpaths.broadband);
$.xmo.getValuesTree($.xpaths.businessEnable);
$.xmo.getValuesTree($.xpaths.cableModem);
$.xmo.getValuesTree($.xpaths.checkFeaturesAvailable);
$.xmo.getValuesTree($.xpaths.checkHideTablesAvailable);
$.xmo.getValuesTree($.xpaths.dect);
$.xmo.getValuesTree($.xpaths.dhcpLeases);
$.xmo.getValuesTree($.xpaths.dynDhcpDns);
$.xmo.getValuesTree($.xpaths.ethernet);
$.xmo.getValuesTree($.xpaths.ethernetDevice);
$.xmo.getValuesTree($.xpaths.ethernetMode);
$.xmo.getValuesTree($.xpaths.firstConnection);
$.xmo.getValuesTree($.xpaths.forbiddenIps);
$.xmo.getValuesTree($.xpaths.gateway);
$.xmo.getValuesTree($.xpaths.gpon);
$.xmo.getValuesTree($.xpaths.greTunnel);
$.xmo.getValuesTree($.xpaths.guiAccessRights);
$.xmo.getValuesTree($.xpaths.guiLockTime);
$.xmo.getValuesTree($.xpaths.healthCheck);
$.xmo.getValuesTree($.xpaths.interfaceGrouping);
$.xmo.getValuesTree($.xpaths.internetConnectivity);
$.xmo.getValuesTree($.xpaths.internetHSI);
$.xmo.getValuesTree($.xpaths.iptv);
$.xmo.getValuesTree($.xpaths.leds);
$.xmo.getValuesTree($.xpaths.macAddressActiveInterfaces);
$.xmo.getValuesTree($.xpaths.main);
$.xmo.getValuesTree($.xpaths.management);
$.xmo.getValuesTree($.xpaths.mesh);
$.xmo.getValuesTree($.xpaths.moca);
$.xmo.getValuesTree($.xpaths.myCloud);
$.xmo.getValuesTree($.xpaths.mySagemcomBox);
$.xmo.getValuesTree($.xpaths.mymedia);
$.xmo.getValuesTree($.xpaths.neighborAps);
$.xmo.getValuesTree($.xpaths.rpc);
$.xmo.getValuesTree($.xpaths.rpc.firmwareUpgrade);      (SAME AS xmo.device)
$.xmo.getValuesTree($.xpaths.runlevel);
$.xmo.getValuesTree($.xpaths.scheduling);
$.xmo.getValuesTree($.xpaths.singleLine);
$.xmo.getValuesTree($.xpaths.splashScreen);
$.xmo.getValuesTree($.xpaths.ssidCreation);
$.xmo.getValuesTree($.xpaths.startSpeed);
$.xmo.getValuesTree($.xpaths.stats);
$.xmo.getValuesTree($.xpaths.technicalLogFast);
$.xmo.getValuesTree($.xpaths.teliaSmartWifi);
$.xmo.getValuesTree($.xpaths.teliaSmartWifiConfig);
$.xmo.getValuesTree($.xpaths.trafficStats);
$.xmo.getValuesTree($.xpaths.userRoles);
$.xmo.getValuesTree($.xpaths.variantEnable);
$.xmo.getValuesTree($.xpaths.voice);
$.xmo.getValuesTree($.xpaths.wan);
$.xmo.getValuesTree($.xpaths.wanInternetStatus);
$.xmo.getValuesTree($.xpaths.wanType);
$.xmo.getValuesTree($.xpaths.wifi);
$.xmo.getValuesTree($.xpaths.wifiAdvancedEnable);
$.xmo.getValuesTree($.xpaths.wifiBandSteering);
$.xmo.getValuesTree($.xpaths.wifiMesh);
$.xmo.getValuesTree($.xpaths.wifiReadOnly);
$.xmo.getValuesTree($.xpaths.wifiResetStats);
$.xmo.getValuesTree($.xpaths.wifiRestoreDefault);
$.xmo.getValuesTree($.xpaths.wizard);
$.xmo.getValuesTree($.xpaths.accessControl.firewall.enable);
$.xmo.setValuesTree('false', $.xpaths.accessControl.firewall.enable);
```

### List all settiings for all users
```javascript
$.xmo.getValuesTree("Device/UserAccounts/Users/*")
$.xmo.getValuesTree("Device/UserAccounts/Users/*/*")
$.xmo.getValuesTree("Device/UserAccounts/Users/*/*/*/*")
$.xmo.getValuesTree("Device/UserAccounts/Users/*/*/*/*/")
```
### Get role status by login
```javascript
Device/UserAccounts/Users/User[Login='admin']/Role
```
### Get role status by uid

```javascript
$.xmo.getValuesTree("Device/UserAccounts/Users/User[@uid='3']/Role");
```

### List all settings for all users, maxdepth 1

```javascript
$.xmo.getValuesTree("Device/UserAccounts/Users/Role['ENDUSER']/Role");
```
### List all settings for all users by user

 ```javascript
$.xmo.getValuesTree("Device/UserAccounts/Users/User[@uid='3']/Profiles/Profile[@uid='2']");
```

Notice: 

List all settings for all users maxdepth 1, maxdepth 1>= sorted by name device_useraccounts1.png

### List profiles by username

```javascript
$.xmo.getValuesTree("Device/UserAccounts/Users/User[@uid='3']/Profiles");
```

### List profiles by username

```javascript
$.xmo.getValuesTree("Device/UserAccounts/Users/User[Login='admin']/Profiles");
```

### List profiles for all users
```javascript
$.xmo.getValuesTree("$.xmo.getValuesTree('Device/UserAccounts/Users/*/Profiles');
```

### List remoteaccess for uid 3

```javascript
$.xmo.getValuesTree("Device/UserAccounts/Users/User[@uid='3']/RemoteAccesses/RemoteAccess[@uid='1']");
```

### List Functionalities for uid 3

```javascript
$.xmo.getValuesTree("Device/UserAccounts/Users/User[@uid='3']/Functionalities");
```
```javascript
$.xmo.getValuesTree("Device/UserAccounts/Users/*/WebAccessPriviledge");
```

### Capture all traffic during documentation

```bash
#!/bin/bash
# Author: wuseman
tsharkDate=$(date +%Y-%m-%d)
tshark -i wlan0 -w investigation_sagemcom__3890v3_ch_comhem-${tsharkDate}.pcap
```

### Capture all GET requests from file
```bash
tshark -r investigation_sagemcom__3890v3_ch_comhem-.pcap -T json \
    "http.request.method==GET"
```
### Capture all POSt requests from file 
```bash
tshark -r investigation_sagemcom__3890v3_ch_comhem-.pcap -T json \
    "http.request.method==POST"
```

### Capture all POST / GET / PUT requests from file

```bash
tshark -i wlan0 -T json \
    "http.request.method==POST" or "http.request.method==GET" or "http.request.method==PUT"

```
### Capture all hosts from file
```bash
tshark -r investigation_sagemcom__3890v3_ch_comhem-.pcap \
    -Tfields \
    -e tshark \
    -r investigation_sagemcom__3890v3_ch_comhem-.pcap \
    -T json "http.request.method==POST" or "http.request.method==GET" \
    |cut -d'"' -f2 \
    |sort \
    |uniq \
    |sed 's/^/tshark -r investigation_sagemcom__3890v3_ch_comhem-.pcap \
    -Tfields \
    -e /ghttp.host

```

### Capture Post and GET requests in realtime

```bash
tshark -i wlan0 -f 'port 80 and 
(tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504F5354 or 
tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420)' -Ttext -z "follow,tcp,ascii,0" -w pcap
```

## Developer Console

### Get all settings for device from developer console

```javascript
$.xmo.getValuesTree("Device");
```

### Get all settings for device and values

* Do `not` use semicolon when run multiple commands

### Dot

* by script: [get_all_settings_via_dot.sh](get_all_settings_via_dot.sh)

```javascript
$.xmo.getValuesTree('*/.')
$.xmo.getValuesTree('*/./.')
$.xmo.getValuesTree('*/././.')
$.xmo.getValuesTree('*/./././.')
$.xmo.getValuesTree('*/././././.')
$.xmo.getValuesTree('*/./././././.')
$.xmo.getValuesTree('*/././././././.'')
$.xmo.getValuesTree('*/./././././././.')
$.xmo.getValuesTree('*/././././././././.')
$.xmo.getValuesTree('*/./././././././././.')
$.xmo.getValuesTree('*/././././././././././.')
$.xmo.getValuesTree('*/./././././././././././.')
```

* Do `not` use semicolon when run multiple commands

### Astrix

* by script: [get_all_settings_via_dot.sh](get_all_settings_via_astrix.sh)

* Settings: : 50

```javascript
$.xmo.getValuesTree('*');
```

* Settings: 50

```javascript
$.xmo.getValuesTree('*/*');
```

* Settings: : 398

```javascript
$.xmo.getValuesTree('*/*/*');
```

* Settings: 698

```javascript
$.xmo.getValuesTree('*/*/*/*');
```

* Settings: 2562

```javascript
$.xmo.getValuesTree('*/*/*/*/*');
```

* Settings: 3557

```javascript
$.xmo.getValuesTree('*/*/*/*/*/*');
```

* Settings: 957

```javascript
$*xmo.getValuesTree('*/./././././.');
```

* Settings: 680

```javascript
$.xmo.getValuesTree('*/*/*/*/*/*/*/*'');
```

* Settings: 33

```javascript
$.xmo.getValuesTree('*/./././././././.');
```

* Settings: 22 (last)

```javascript
$.xmo.getValuesTree('*/*/*/*/*/*/*/*/*/*');
```

### Astrix + Dot"

```javascript
$.xmo.getValuesTree('*/.')
$.xmo.getValuesTree('*/./*/./*/./*/./*/./*/./*')
$.xmo.getValuesTree('*/./*/./*/./*/./*/./*/./*')
```

### Get capabilitys

Result: 

* Settings: N/A

```javascript
$.xmo.getCapability("*")
```
* Settings: 50

```javascript
$.xmo.getCapability("*/*")
``````
* Settings: 398

```javascript
$.xmo.getCapability("*/*/*")
```
* Settings: 2562

```javascript
$.xmo.getCapability("*/*/*/*")
```

* Settings: 1618

```javascript
$.xmo.getCapability("*/*/*/*/*")
```
* Settings: 3557

```javascript
$.xmo.getCapability("*/*/*/*/*/*")
```

* Settings: 957

```javascript
$.xmo.getCapability("*/*/*/*/*/*/*")
```

* Settings: 680

```javascript
$.xmo.getCapability("*/*/*/*/*/*/*/*")
```

* Settings 33

```javascript
.xmo.getCapability("*/*/*/*/*/*/*/*/*/*")
```

* Settings: 22
```javascript
.xmo.getCapability("*/*/*/*/*/*/*/*/*/*")
```


### Get configs

```
$.config
```









## Curl

### Get all settings for device via curl

```bash
curl 'http://192.168.0.1/cgi/json-req' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
session=%7B%22req_id%22%3A172%2C%22sess_id%22%3A204258147%2C%22basic%22%3Afalse%2C%22user%22%3A%22admin%22%2C%22dataModel%22%3A%7B%22name%22%3A%22Internal%22%2C%22nss%22%3A%5B%7B%22name%22%3A%22gtw%22%2C%22uri%22%3A%22http%3A%2F%2Fsagemcom.com%2Fgateway-data%22%7D%5D%7D%2C%22ha1%22%3A%2260e8486c0af7305c8f212396e676c91a9aefa50545172682115d84e0e000f244%22%2C%22nonce%22%3A%222230989754%22%7D' \
  -H 'X-Requested-With: XMLHttpRequest' \
  --data-raw 'req=%7B%22request%22%3A%7B%22id%22%3A171%2C%22session-id%22%3A204258147%2C%22priority%22%3Afalse%2C%22actions%22%3A%5B%7B%22id%22%3A0%2C%22method%22%3A%22getValue%22%2C%22xpath%22%3A%22Device%22%2C%22options%22%3A%7B%22capability-flags%22%3A%7B%22interface%22%3Atrue%7D%7D%7D%5D%2C%22cnonce%22%3A3223993585%2C%22auth-key%22%3A%22e7500e6d53b9d781995def81d64e4793%22%7D%7D' \
```


### Read all debug or higher logs

```bash
curl 'http://192.168.0.1/download/01f8d754ce0755098dc6b290326d5f61/50e3426e/logFile' \
  -H 'Accept: application/json, text/plain, */*' \
session=%7B%22req_id%22%3A557%2C%22sess_id%22%3A1791421664%2C%22basic%22%3Afalse%2C%22user%22%3A%22admin%22%2C%22dataModel%22%3A%7B%22name%22%3A%22Internal%22%2C%22nss%22%3A%5B%7B%22name%22%3A%22gtw%22%2C%22uri%22%3A%22http%3A%2F%2Fsagemcom.com%2Fgateway-data%22%7D%5D%7D%2C%22ha1%22%3A%22747597020ef7305c8f212396e676c91a9aefa50545d99f685a56820d0fb50afe%22%2C%22nonce%22%3A%222168026204%22%7D' \
  -H 'DNT: 1' \
```

### Create a backup file via curl

* Add `-o device.cfg` to save settings to a file

```bash
curl 'http://192.168.0.1/cgi/json-req' session=%7B%22req_id%22%3A517%2C%22sess_id%22%3A1791421664%2C%22basic%22%3Afalse%2C%22user%22%3A%22admin%22%2C%22dataModel%22%3A%7B%22name%22%3A%22Internal%22%2C%22nss%22%3A%5B%7B%22name%22%3A%22gtw%22%2C%22uri%22%3A%22http%3A%2F%2Fsagemcom.com%2Fgateway-data%22%7D%5D%7D%2C%22ha1%22%3A%22747597020ef7305c8f212396e676c91a9aefa50545d99f685a56820d0fb50afe%22%2C%22nonce%22%3A%222168026204%22%7D' \
  -H 'X-Requested-With: XMLHttpRequest' \
  --data-raw 'req=%7B%22request%22%3A%7B%22id%22%3A516%2C%22session-id%22%3A1791421664%2C%22priority%22%3Afalse%2C%22actions%22%3A%5B%7B%22id%22%3A0%2C%22method%22%3A%22getDownloadURI%22%2C%22xpath%22%3A%22Device%2FDeviceInfo%2FVendorConfigFiles%2FVendorConfigFile%5BAlias%3D%5C%22DEVICE_CONFIG%5C%22%5D%22%2C%22parameters%22%3A%7B%22FileName%22%3A%22%22%7D%7D%5D%2C%22cnonce%22%3A2428242414%2C%22auth-key%22%3A%221d6944f428fd18e18cf7a8cbfd8653b5%22%7D%7D' \
  ```

  ## Resources

* https://forums.whirlpool.net.au/archive/2746904
* https://github.com/mattimustang/optus-sagemcom-fast-3864-hacks


