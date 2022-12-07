<p align="center">
  <img width="120px" src="https://i.imgur.com/o2WZgcl.png" />
  <h2 align="center"># # Sagemcom F@ST 3890V3 CH</h2>
  <h3 align="center"Com Hem WiFi Hub C2</h3>
</p>

***

This is also a router from a Swedish Internet operator to find back doors and to see what is under the hood.

##### I got this router mailed to me as a donation from @anotherman 2022-12-03 - Thanks alot @anotherman
### Default User Login
```
Username: admin
BlockedUser: guest
Maintheme: styles/themes/comhem-main.css
FeatureAccessz: acs, admin, expert, internal, sagemcom
firmwareUpgrade: Device/gen3890v3
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

### List all settings for all users maxdepth 1, maxdepth 1>= sorted by name device_useraccounts1.png

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

$.xmo.getValuesTree("Device/UserAccounts/Users/*/WebAccessPriviledge");


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

tshark -i wlan0 -f 'port 80 and 
(tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504F5354 or 
tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420)' -Ttext -z "follow,tcp,ascii,0" -w pcap


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
### Create a backup of device

$.xmo.saveConfiguration()

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
```
.xmo.getCapability("*/*/*/*/*/*/*/*/*/*")



### Get configs

$.config










## Curl

### Get all settings for device via curl

curl 'http://192.168.0.1/cgi/json-req' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
  -H 'Accept-Language: en-SE,en;q=0.9,sv-SE;q=0.8,sv;q=0.7,en-GB;q=0.6,en-US;q=0.5' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'Cookie: lang=en; session=%7B%22req_id%22%3A172%2C%22sess_id%22%3A204258147%2C%22basic%22%3Afalse%2C%22user%22%3A%22admin%22%2C%22dataModel%22%3A%7B%22name%22%3A%22Internal%22%2C%22nss%22%3A%5B%7B%22name%22%3A%22gtw%22%2C%22uri%22%3A%22http%3A%2F%2Fsagemcom.com%2Fgateway-data%22%7D%5D%7D%2C%22ha1%22%3A%2260e8486c0af7305c8f212396e676c91a9aefa50545172682115d84e0e000f244%22%2C%22nonce%22%3A%222230989754%22%7D' \
  -H 'DNT: 1' \
  -H 'Origin: http://192.168.0.1' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://192.168.0.1/2.0/gui/' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'X-Requested-With: XMLHttpRequest' \
  --data-raw 'req=%7B%22request%22%3A%7B%22id%22%3A171%2C%22session-id%22%3A204258147%2C%22priority%22%3Afalse%2C%22actions%22%3A%5B%7B%22id%22%3A0%2C%22method%22%3A%22getValue%22%2C%22xpath%22%3A%22Device%22%2C%22options%22%3A%7B%22capability-flags%22%3A%7B%22interface%22%3Atrue%7D%7D%7D%5D%2C%22cnonce%22%3A3223993585%2C%22auth-key%22%3A%22e7500e6d53b9d781995def81d64e4793%22%7D%7D' \
  --compressed \
  --insecure


### Read all debug or higher logs

```bash
curl 'http://192.168.0.1/download/01f8d754ce0755098dc6b290326d5f61/50e3426e/logFile' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-SE,en;q=0.9,sv-SE;q=0.8,sv;q=0.7,en-GB;q=0.6,en-US;q=0.5' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: lang=en; session=%7B%22req_id%22%3A557%2C%22sess_id%22%3A1791421664%2C%22basic%22%3Afalse%2C%22user%22%3A%22admin%22%2C%22dataModel%22%3A%7B%22name%22%3A%22Internal%22%2C%22nss%22%3A%5B%7B%22name%22%3A%22gtw%22%2C%22uri%22%3A%22http%3A%2F%2Fsagemcom.com%2Fgateway-data%22%7D%5D%7D%2C%22ha1%22%3A%22747597020ef7305c8f212396e676c91a9aefa50545d99f685a56820d0fb50afe%22%2C%22nonce%22%3A%222168026204%22%7D' \
  -H 'DNT: 1' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://192.168.0.1/2.0/gui/' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  --compressed \
  --insecure
```

### Create a backup file via curl

* Add `-o device.cfg` to save settings to a file

```bash
curl 'http://192.168.0.1/cgi/json-req' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
  -H 'Accept-Language: en-SE,en;q=0.9,sv-SE;q=0.8,sv;q=0.7,en-GB;q=0.6,en-US;q=0.5' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'Cookie: lang=en; session=%7B%22req_id%22%3A517%2C%22sess_id%22%3A1791421664%2C%22basic%22%3Afalse%2C%22user%22%3A%22admin%22%2C%22dataModel%22%3A%7B%22name%22%3A%22Internal%22%2C%22nss%22%3A%5B%7B%22name%22%3A%22gtw%22%2C%22uri%22%3A%22http%3A%2F%2Fsagemcom.com%2Fgateway-data%22%7D%5D%7D%2C%22ha1%22%3A%22747597020ef7305c8f212396e676c91a9aefa50545d99f685a56820d0fb50afe%22%2C%22nonce%22%3A%222168026204%22%7D' \
  -H 'DNT: 1' \
  -H 'Origin: http://192.168.0.1' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://192.168.0.1/2.0/gui/' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'X-Requested-With: XMLHttpRequest' \
  --data-raw 'req=%7B%22request%22%3A%7B%22id%22%3A516%2C%22session-id%22%3A1791421664%2C%22priority%22%3Afalse%2C%22actions%22%3A%5B%7B%22id%22%3A0%2C%22method%22%3A%22getDownloadURI%22%2C%22xpath%22%3A%22Device%2FDeviceInfo%2FVendorConfigFiles%2FVendorConfigFile%5BAlias%3D%5C%22DEVICE_CONFIG%5C%22%5D%22%2C%22parameters%22%3A%7B%22FileName%22%3A%22%22%7D%7D%5D%2C%22cnonce%22%3A2428242414%2C%22auth-key%22%3A%221d6944f428fd18e18cf7a8cbfd8653b5%22%7D%7D' \
  --compressed \
  --insecure

  ```


  ## Resources

* https://forums.whirlpool.net.au/archive/2746904
* https://github.com/mattimustang/optus-sagemcom-fast-3864-hacks


