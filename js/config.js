"use strict";
$.routes = function(a, b) {
    return {
        desktop: {
            "public": [{
                name: "public",
                state: {
                    "abstract": !0,
                    templateUrl: "views/base.html",
                    data: {
                        access: b["public"]
                    }
                }
            }, {
                name: "public.404",
                state: {
                    url: "/404/",
                    templateUrl: "404.html"
                }
            }, {
                name: "public.blockedAccess",
                state: {
                    url: "/blockedAccess/",
                    templateUrl: "views/blocked-access.html",
                    controller: "BlockedAccessController"
                }
            }],
            anon: [{
                name: "anon",
                state: {
                    "abstract": !0,
                    template: "<ui-view/>",
                    data: {
                        access: b.anon
                    }
                }
            }, {
                name: "anon.login",
                state: {
                    url: "/login/:user",
                    templateUrl: a.simpleLogin ? "views/base.html" : "views/login.html",
                    controller: "LoginController"
                }
            }, {
                name: "anon.login.simple",
                state: {
                    url: "/credentials",
                    templateUrl: "views/loginSimple.html",
                    controller: "LoginController"
                }
            }, {
                name: "anon.androidHelp",
                state: {
                    url: "/androidHelp/",
                    templateUrl: "views/android-help.html",
                    controller: "LoginController"
                }
            }, {
                name: "anon.mysagemcombox",
                state: {
                    "abstract": !0,
                    url: "/mybox",
                    templateUrl: "views/base.html"
                }
            }, {
                name: "anon.mysagemcombox.deviceInfo",
                state: {
                    url: "/deviceInfo",
                    templateUrl: "views/mysagemcombox.simple-main.html"
                }
            }, {
                name: "anon.mysagemcombox.deviceInfo.general",
                state: {
                    url: "/general",
                    templateUrl: "views/mysagemcombox.device-info.device-info.html",
                    controller: "DeviceInformationController"
                }
            }],
            user: [{
                name: "user",
                state: {
                    "abstract": !0,
                    templateUrl: "views/base.html",
                    data: {
                        access: b.guest
                    }
                }
            }, {
                name: "user.homefirst",
                state: {
                    url: "/firstAccess",
                    templateUrl: "views/first-access.html",
                    controller: "FirstAccessController"
                }
            }, {
                name: "user.homefirst.user",
                state: {
                    url: "/user",
                    templateUrl: "views/first-access.user.html",
                    controller: "AccessControlUserController"
                }
            }, {
                name: "user.homefirst.connection",
                state: {
                    url: "/connection",
                    templateUrl: "views/first-access.connection.html",
                    controller: "ConnectedDevicesController"
                }
            }, {
                name: "user.homefirst.ppp",
                state: {
                    url: "/ppp",
                    templateUrl: "views/first-access.ppp.html",
                    controller: "PPPController"
                }
            }, {
                name: "user.homefirst.wifi",
                state: {
                    url: "/wifi/:radio/:firstAccessPPP",
                    templateUrl: "views/first-access.wifi.html",
                    controller: "WiFiBasicController"
                }
            }, {
                name: "user.homefirst.end",
                state: {
                    url: "/finish",
                    templateUrl: "views/first-access.end.html",
                    controller: "EndController"
                }
            }, {
                name: "user.home",
                state: {
                    url: "/",
                    templateUrl: a.mainPage || "views/main.html",
                    controller: "ConnectedDevicesController"
                }
            }, {
                name: "user.mysagemcombox",
                state: {
                    url: "/mybox",
                    templateUrl: "views/mysagemcombox.main.html"
                }
            }, {
                name: "user.mysagemcombox.deviceInfo",
                state: {
                    url: "/deviceInfo",
                    templateUrl: "views/mysagemcombox.device-info.main.html"
                }
            }, {
                name: "user.mysagemcombox.dhcp",
                state: {
                    url: "/DHCP",
                    templateUrl: "views/mysagemcombox.dhcp.html",
                    controller: "DhcpController",
                    data: {
                        module: "lanIpv4"
                    }
                }
            }, {
                name: "user.mysagemcombox.deviceInfo.dhcpLeases",
                state: {
                    url: "/dhcpLeases",
                    templateUrl: "views/mysagemcombox.device-info.dhcp-leases.html",
                    controller: "DhcpLeasesController",
                    data: {
                        module: "dhcpLeases"
                    }
                }
            }, {
                name: "user.mysagemcombox.deviceInfo.statistics",
                state: {
                    url: "/statistics",
                    templateUrl: "views/mysagemcombox.device-info.statistics.html",
                    controller: "StatisticsController",
                    data: {
                        module: "statistics"
                    }
                }
            }, {
                name: "user.mysagemcombox.deviceInfo.arp",
                state: {
                    url: "/arp",
                    templateUrl: "views/mysagemcombox.device-info.arp.html",
                    controller: "ARPController",
                    data: {
                        module: "arpTable"
                    }
                }
            }, {
                name: "user.mysagemcombox.deviceInfo.docsis",
                state: {
                    url: "/docsis",
                    templateUrl: "views/mysagemcombox.device-info.docsis.html",
                    controller: "DeviceInformationController",
                    data: {
                        module: "docsis"
                    }
                }
            }, {
                name: "user.mysagemcombox.deviceInfo.connection",
                state: {
                    url: "/connection",
                    templateUrl: "views/mysagemcombox.device-info.connection.html",
                    controller: "CableModemConnectionController",
                    data: {
                        title: "connection"
                    }
                }
            }, {
                name: "user.mysagemcombox.deviceInfo.configuration",
                state: {
                    url: "/configuration",
                    controller: "MaintenanceResetController",
                    templateUrl: "views/mysagemcombox.device-info.configuration.html",
                    data: {
                        title: "configuration"
                    }
                }
            }, {
                name: "user.mysagemcombox.deviceInfo.deviceInfo",
                state: {
                    url: "/deviceInfo",
                    templateUrl: "views/mysagemcombox.device-info.device-info.html",
                    controller: "DeviceInformationController"
                }
            }, {
                name: "user.mysagemcombox.mass-storage",
                state: {
                    url: "/mass-storage/",
                    templateUrl: "views/mysagemcombox.mass-storage.html",
                    controller: "MassStorageController"
                }
            }, {
                name: "user.mysagemcombox.dns",
                state: {
                    url: "/dns",
                    templateUrl: "views/mysagemcombox.dns.main.html"
                }
            }, {
                name: "user.mysagemcombox.deviceInfo.licenses",
                state: {
                    url: "/licenses",
                    templateUrl: "views/mysagemcombox.device-info.licenses.html"
                }
            }, {
                name: "user.mysagemcombox.dns.server",
                state: {
                    url: "/server",
                    templateUrl: "views/mysagemcombox.dns.server.html",
                    controller: "DnsServerController"
                }
            }, {
                name: "user.mysagemcombox.ipv6dns",
                state: {
                    url: "/ipv6dns",
                    templateUrl: "views/mysagemcombox.ipv6dns.html",
                    controller: "DnsIPv6ServerController"
                }
            }, {
                name: "user.mysagemcombox.ddns",
                state: {
                    url: "/ddns",
                    templateUrl: "views/mysagemcombox.ddns.html",
                    controller: "DdnsController",
                    data: {
                        module: "dyndns"
                    }
                }
            }, {
                name: "user.mysagemcombox.bridgemode",
                state: {
                    url: "/bridgemode",
                    templateUrl: "views/mysagemcombox.bridge-mode.html",
                    controller: "BridgeModeController",
                    data: {
                        module: "bridgemode"
                    }
                }
            }, {
                name: "user.mysagemcombox.walledgarden",
                state: {
                    url: "/walledgarden",
                    templateUrl: "views/mysagemcombox.walled-garden.html",
                    controller: "WalledGardenController",
                    data: {
                        module: "walledgarden"
                    }
                }
            }, {
                name: "user.mysagemcombox.maintenance",
                state: {
                    url: "/maintenance",
                    controller: "MaintenanceMainController",
                    templateUrl: a.simpleMaintenance ? "views/mysagemcombox.maintenance.mainSimple.html" : "views/mysagemcombox.maintenance.main.html"
                }
            }, {
                name: "user.mysagemcombox.maintenance.reset",
                state: {
                    url: "/reset",
                    templateUrl: "views/mysagemcombox.maintenance.reset.html",
                    controller: "MaintenanceResetController"
                }
            }, {
                name: "user.mysagemcombox.maintenance.log",
                state: {
                    url: "/log",
                    templateUrl: "views/mysagemcombox.maintenance.log.main.html"
                }
            }, {
                name: "user.mysagemcombox.maintenance.log.systemlog",
                state: {
                    url: "/system-log",
                    templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                    controller: "MaintenanceSystemLogController"
                }
            }, {
                name: "user.mysagemcombox.maintenance.log.operatorlog",
                state: {
                    url: "/operator-log",
                    templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                    controller: "MaintenanceSystemLogController",
                    data: {
                        type: "operator"
                    }
                }
            }, {
                name: "user.mysagemcombox.maintenance.log.securitylog",
                state: {
                    url: "/security-log",
                    templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                    controller: "MaintenanceSystemLogController",
                    data: {
                        type: "firewall"
                    }
                }
            }, {
                name: "user.mysagemcombox.maintenance.log.upnplog",
                state: {
                    url: "/upnp-log",
                    templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                    controller: "MaintenanceSystemLogController",
                    data: {
                        type: "upnp"
                    }
                }
            }, {
                name: "user.mysagemcombox.maintenance.tr69",
                state: {
                    url: "/tr69",
                    templateUrl: "views/mysagemcombox.maintenance.tr69.html",
                    controller: "MaintenanceTr69Controller"
                }
            }, {
                name: "user.mysagemcombox.maintenance.firmwareUpdate",
                state: {
                    url: "/firmware-update",
                    templateUrl: "views/mysagemcombox.maintenance.firmware-update.html",
                    controller: "MaintenanceResetController"
                }
            }, {
                name: "user.mysagemcombox.maintenance.firmwareUpdateRest",
                state: {
                    url: "/firmware-update-new",
                    templateUrl: "views/xswan/mysagemcombox.maintenance.firmware-update.html",
                    controller: "MaintenanceResetXswanController"
                }
            }, {
                name: "user.mysagemcombox.maintenance.internetUtilities",
                state: {
                    url: "/internet-utilities",
                    templateUrl: "views/mysagemcombox.maintenance.internet-utilities.html",
                    controller: "MaintenanceInternetUtilitiesController",
                    data: {
                        module: "internetUtilities"
                    }
                }
            }, {
                name: "user.mysagemcombox.maintenance.filteredUtilities",
                state: {
                    url: "/internet-utilities/:tool",
                    templateUrl: "views/mysagemcombox.maintenance.internet-utilities.html",
                    controller: "MaintenanceInternetUtilitiesController"
                }
            }, {
                name: "user.mysagemcombox.maintenance.bkpRestore",
                state: {
                    url: "/backup-restore",
                    templateUrl: "views/mysagemcombox.maintenance.bkpRestore.html",
                    controller: "MaintenanceResetController",
                    data: {
                        module: "bkpRestore"
                    }
                }
            }, {
                name: "user.mysagemcombox.maintenance.ntp",
                state: {
                    url: "/ntp",
                    templateUrl: "views/mysagemcombox.maintenance.ntp.html",
                    controller: "NTPController",
                    data: {
                        module: "ntp"
                    }
                }
            }, {
                name: "user.mysagemcombox.maintenance.healthCheck",
                state: {
                    url: "/healthCheck",
                    templateUrl: "views/mysagemcombox.maintenance.health-check.html",
                    controller: "MaintenanceHealthCheckController"
                }
            }, {
                name: "user.mysagemcombox.maintenance.firstInstall",
                state: {
                    url: "/firstInstall",
                    templateUrl: "views/mysagemcombox.maintenance.first-install.html"
                }
            }, {
                name: "user.mysagemcombox.autodimming",
                state: {
                    url: "/autodimming",
                    templateUrl: "views/mysagemcombox.autodimming.html",
                    controller: "AutoDimmingController"
                }
            }, {
                name: "user.mysagemcombox.monitor",
                state: {
                    url: "/monitor",
                    templateUrl: "views/mysagemcombox.monitor.main.html"
                }
            }, {
                name: "user.mysagemcombox.monitor.quick",
                state: {
                    url: "/:monitorTab",
                    templateUrl: "views/mysagemcombox.monitor.quick.html",
                    controller: "BandWidthMonitoringController"
                }
            }, {
                name: "user.mysagemcombox.monitor.traffic",
                state: {
                    url: "/history/:monitorTab",
                    templateUrl: "views/mysagemcombox.monitor.traffic.html",
                    controller: "BandWidthMonitoringController"
                }
            }, {
                name: "user.mysagemcombox.lanIpv6",
                state: {
                    url: "/lanIpv6",
                    templateUrl: "views/mysagemcombox.lan-ipv6.html",
                    controller: "LanIPv6Controller"
                }
            }, {
                name: "user.mysagemcombox.lanIpv6Router",
                state: {
                    url: "/lanIpv6-router",
                    templateUrl: "views/mysagemcombox.lan-ipv6-router.html",
                    controller: "LanIPv6Controller"
                }
            }, {
                name: "user.mysagemcombox.ecoMode",
                state: {
                    url: "/ecoMode",
                    templateUrl: "views/mysagemcombox.eco-mode.html",
                    controller: "LEDController"
                }
            }, {
                name: "user.mysagemcombox.led",
                state: {
                    url: "/led",
                    templateUrl: "views/mysagemcombox.led.html",
                    controller: "LEDController"
                }
            }, {
                name: "user.mysagemcombox.ledSlider",
                state: {
                    url: "/led-slider",
                    templateUrl: "views/mysagemcombox.led-slider.html",
                    controller: "LEDSliderController"
                }
            }, {
                name: "user.moca",
                state: {
                    url: "/moca",
                    templateUrl: "views/moca.html",
                    controller: "MocaController"
                }
            }, {
                name: "user.ethernet",
                state: {
                    url: "/ethernet",
                    templateUrl: "views/ethernet.html",
                    controller: "EthernetController"
                }
            }, {
                name: "user.wifi",
                state: {
                    url: "/wifi/:radio/:mode",
                    templateUrl: "views/wifi.main.html",
                    controller: "WifiMainController"
                }
            }, {
                name: "user.wifi.basic",
                state: {
                    url: "/basic",
                    templateUrl: "views/wifi.basic.html",
                    controller: "WiFiBasicController",
                    data: {
                        module: "wifiBasic"
                    }
                }
            }, {
                name: "user.wifi.advanced",
                state: {
                    url: "/advanced",
                    templateUrl: "views/wifi.advanced.html",
                    controller: "WiFiAdvancedController",
                    data: {
                        module: "wifiAdvanced"
                    }
                }
            }, {
                name: "user.wifi.wps",
                state: {
                    url: "/wps",
                    templateUrl: "views/wifi.wps.html",
                    controller: "WiFiWPSController",
                    data: {
                        module: "wifiWPS"
                    }
                }
            }, {
                name: "user.wifi.stats",
                state: {
                    url: "/stats",
                    templateUrl: "views/wifi.stats.html",
                    controller: "WiFiStatsController",
                    data: {
                        module: "wifiStats"
                    }
                }
            }, {
                name: "user.wifi.mac-filter",
                state: {
                    url: "/mac-filter",
                    templateUrl: "views/wifi.mac-filter.html",
                    controller: "WiFiMacFilterController",
                    data: {
                        module: "wifiMacFilter"
                    }
                }
            }, {
                name: "user.wifi.environment",
                state: {
                    url: "/environment",
                    templateUrl: "views/wifi.environment.main.html"
                }
            }, {
                name: "user.wifi.environment.scan",
                state: {
                    url: "/scan",
                    templateUrl: "views/wifi.environment.scan.html",
                    controller: "WiFiEnvironmentController"
                }
            }, {
                name: "user.wifi.environment.recommended",
                state: {
                    url: "/recommended",
                    templateUrl: "views/wifi.environment.recommended.html",
                    controller: "WiFiChannelController"
                }
            }, {
                name: "user.wifi.guest",
                state: {
                    url: "/guest",
                    templateUrl: "views/wifi.guest.html"
                }
            }, {
                name: "user.wifi.wds",
                state: {
                    url: "/wds",
                    templateUrl: "views/wifi.wds.html"
                }
            }, {
                name: "user.accessControl",
                state: {
                    url: "/access-control",
                    templateUrl: "views/access-control.main.html"
                }
            }, {
                name: "user.accessControl.dmz",
                state: {
                    url: "/dmz",
                    templateUrl: "views/access-control.dmz.html",
                    controller: "DMZController"
                }
            }, {
                name: "user.accessControl.dmzIPv6",
                state: {
                    url: "/dmzIPv6",
                    templateUrl: "views/access-control.dmz-ipv6.html",
                    controller: "DmzIPv6Controller"
                }
            }, {
                name: "user.accessControl.natMapping",
                state: {
                    url: "/nat-mapping",
                    templateUrl: "views/access-control.nat-mapping.html",
                    controller: "NatMappingController"
                }
            }, {
                name: "user.accessControl.firewall",
                state: {
                    url: "/firewall",
                    templateUrl: "views/access-control.firewall.html",
                    controller: "FirewallController",
                    data: {
                        module: "firewall"
                    }
                }
            }, {
                name: "user.accessControl.remoteaccess",
                state: {
                    url: "/remote-access",
                    templateUrl: "views/access-control.remote-access.html",
                    controller: "RemoteManagementController",
                    data: {
                        module: "remoteAccess"
                    }
                }
            }, {
                name: "user.accessControl.user",
                state: {
                    url: "/user",
                    templateUrl: "views/access-control.user.html",
                    controller: "AccessControlUserController"
                }
            }, {
                name: "user.accessControl.upnp",
                state: {
                    url: "/upnp",
                    templateUrl: "views/access-control.upnp.html",
                    controller: "UPnPController"
                }
            }, {
                name: "user.accessControl.parentalControl",
                state: {
                    url: "/parental-control",
                    templateUrl: "views/access-control.parental-control.main.html"
                }
            }, {
                name: "user.accessControl.parentalControl.planning",
                state: {
                    url: "/planning",
                    templateUrl: "views/access-control.parental-control.planning.html",
                    controller: "ParentalControllerPlanning"
                }
            }, {
                name: "user.accessControl.parentalControl.planningTimeslot",
                state: {
                    url: "/planning-timeslot",
                    templateUrl: "views/access-control.parental-control.planning.timeslot.html",
                    controller: "ParentalControllerPlanningTimeslot"
                }
            }, {
                name: "user.accessControl.parentalControl.filtering",
                state: {
                    url: "/filtering",
                    templateUrl: "views/access-control.parental-control.filtering.html",
                    controller: "ParentalControllerFiltering"
                }
            }, {
                name: "user.accessControl.parentalControl.control",
                state: {
                    url: "/control",
                    templateUrl: "views/access-control.parental-control.profile.html",
                    controller: "ParentalControllerProfiles"
                }
            }, {
                name: "user.accessControl.portForwarding",
                state: {
                    url: "/port-forwarding",
                    templateUrl: "views/access-control.port-forwarding.main.html",
                    data: {
                        module: "portForwarding"
                    }
                }
            }, {
                name: "user.accessControl.portForwarding.addRule",
                state: {
                    url: "/add-rule",
                    templateUrl: "views/access-control.port-forwarding.html",
                    controller: "PortForwardingController"
                }
            }, {
                name: "user.accessControl.portForwarding.gamesApp",
                state: {
                    url: "/games-app",
                    templateUrl: "views/access-control.port-forwarding.games-app.html",
                    controller: "GamesController"
                }
            }, {
                name: "user.accessControl.portTriggering",
                state: {
                    url: "/port-triggering",
                    templateUrl: "views/access-control.port-triggering.html",
                    controller: "PortTriggeringController",
                    data: {
                        module: "portTriggering"
                    }
                }
            }, {
                name: "user.accessControl.certificates",
                state: {
                    url: "/certificates",
                    templateUrl: "views/access-control.certificates.main.html"
                }
            }, {
                name: "user.accessControl.certificates.local",
                state: {
                    url: "/local",
                    templateUrl: "views/access-control.certificates.local.html"
                }
            }, {
                name: "user.accessControl.certificates.remote",
                state: {
                    url: "/remote",
                    templateUrl: "views/access-control.certificates.remote.html"
                }
            }, {
                name: "user.accessControl.vpn",
                state: {
                    url: "/vpn",
                    templateUrl: "views/access-control.vpn.main.html"
                }
            }, {
                name: "user.accessControl.vpn.lt2p",
                state: {
                    url: "/lt2p",
                    templateUrl: "views/access-control.vpn.lt2p.html"
                }
            }, {
                name: "user.accessControl.vpn.ipsec",
                state: {
                    url: "/ipSec",
                    templateUrl: "views/access-control.vpn.ipsec.html"
                }
            }, {
                name: "user.ethernetDevice",
                state: {
                    url: "/device/:layer/:uid",
                    templateUrl: "views/ethernet-device.main.html",
                    controller: "EthernetDeviceMainController"
                }
            }, {
                name: "user.ethernetDevice.deviceInfo",
                state: {
                    url: "/device-info",
                    templateUrl: "views/ethernet-device.device-info.html",
                    controller: "EthernetDeviceController"
                }
            }, {
                name: "user.ethernetDevice.dmz",
                state: {
                    url: "/dmz",
                    templateUrl: "views/ethernet-device.dmz.html",
                    controller: "DMZController",
                    data: {
                        module: "dmz"
                    }
                }
            }, {
                name: "user.ethernetDevice.portForwarding",
                state: {
                    url: "/port-forwarding",
                    templateUrl: "views/ethernet-device.port-forwarding.main.html",
                    controller: "EthernetDevicePFMainController"
                }
            }, {
                name: "user.ethernetDevice.portForwarding.addRule",
                state: {
                    url: "/add-rule",
                    templateUrl: "views/access-control.port-forwarding.html",
                    controller: "PortForwardingController"
                }
            }, {
                name: "user.ethernetDevice.portForwarding.gamesApp",
                state: {
                    url: "/games-app",
                    templateUrl: "views/access-control.port-forwarding.games-app.html",
                    controller: "GamesController"
                }
            }, {
                name: "user.ethernetDevice.firewall",
                state: {
                    url: "/firewall",
                    templateUrl: "views/access-control.firewall.html",
                    controller: "FirewallController"
                }
            }, {
                name: "user.ethernetDevice.parentalControl",
                state: {
                    url: "/parental-control",
                    templateUrl: "views/access-control.parental-control.planning.html",
                    controller: "ParentalControllerPlanning"
                }
            }, {
                name: "user.plcDevice",
                state: {
                    url: "/plc/:uid",
                    templateUrl: "views/plc.device-info.html",
                    controller: "PlcDeviceController"
                }
            }, {
                name: "user.usbDevice",
                state: {
                    url: "/usb-devices/:uid",
                    templateUrl: "views/usb-device.main.html",
                    controller: "UsbDeviceMainController"
                }
            }, {
                name: "user.usbDevice.deviceInfo",
                state: {
                    url: "/usb-devices-info/",
                    templateUrl: "views/usb-device.device-info.html",
                    controller: "UsbDeviceController"
                }
            }, {
                name: "user.usbDevice.massStorage",
                state: {
                    url: "/mass-storage/",
                    templateUrl: "views/mysagemcombox.mass-storage.html",
                    controller: "MassStorageController"
                }
            }, {
                name: "user.mysagemcombox.route",
                state: {
                    url: "/route",
                    templateUrl: "views/mysagemcombox.route.main.html",
                    data: {
                        module: "route"
                    }
                }
            }, {
                name: "user.mysagemcombox.route.static",
                state: {
                    url: "/static",
                    templateUrl: "views/mysagemcombox.route.static.html",
                    controller: "RouteStaticController"
                }
            }, {
                name: "user.mysagemcombox.mymedia",
                state: {
                    url: "/myMedia",
                    templateUrl: "views/my.media.html",
                    controller: "MyMediaController"
                }
            }, {
                name: "user.mycloud",
                state: {
                    url: "/mycloud",
                    templateUrl: "views/mycloud.main.html"
                }
            }, {
                name: "user.mycloud.login",
                state: {
                    url: "/login",
                    templateUrl: "views/mycloud.login.html",
                    controller: "MyCloudController"
                }
            }, {
                name: "user.mycloud.dropbox",
                state: {
                    url: "/dropbox",
                    templateUrl: "views/mycloud.dropbox.html",
                    controller: "MyCloudController"
                }
            }, {
                name: "user.phonebook",
                state: {
                    url: "/phonebook",
                    templateUrl: "views/phonebook.main.html"
                }
            }, {
                name: "user.phonebook.contacts",
                state: {
                    url: "/contacts",
                    templateUrl: "views/phonebook.contacts.html",
                    controller: "PhonebookContactsController"
                }
            }, {
                name: "user.phonebook.callLog",
                state: {
                    url: "/callLog",
                    templateUrl: "views/phonebook.call-log.html",
                    controller: "VoiceDeviceController"
                }
            }, {
                name: "user.answeringMachine",
                state: {
                    url: "/answering-machine",
                    templateUrl: "views/answering-machine.main.html"
                }
            }, {
                name: "user.answeringMachine.messages",
                state: {
                    url: "/messages",
                    templateUrl: "views/answering-machine.messages.html",
                    controller: "AnsweringMachineMessagesController"
                }
            }, {
                name: "user.answeringMachine.settings",
                state: {
                    url: "/settings/:uid",
                    templateUrl: "views/answering-machine.settings.html",
                    controller: "AnsweringMachineSettingsController"
                }
            }, {
                name: "user.answeringMachine.mail-server",
                state: {
                    url: "/mail-server",
                    templateUrl: "views/answering-machine.mail-server.html",
                    controller: "AnsweringMachineMailserverController",
                    data: {
                        module: "mailServerSettings"
                    }
                }
            }, {
                name: "user.voiceDevice",
                state: {
                    url: "/voice-device-info/:uid",
                    templateUrl: "views/voice.device-info.html",
                    controller: "VoiceDeviceController"
                }
            }, {
                name: "user.internetConnectivity",
                state: {
                    url: "/internetConnectivity",
                    templateUrl: "views/internet-connectivity.main.html"
                }
            }, {
                name: "user.internetConnectivity.ppp",
                state: {
                    url: "/ppp",
                    templateUrl: "views/internet-connectivity.ppp.html",
                    controller: "PPPController"
                }
            }, {
                name: "user.internetConnectivity.wan",
                state: {
                    url: "/wan",
                    templateUrl: "views/internet-connectivity.wan.html",
                    controller: "WANController",
                    data: {
                        module: "internetConnectivityWanAdvanced"
                    }
                }
            }, {
                name: "user.internetConnectivity.trafficSpeed",
                state: {
                    url: "/trafficSpeed",
                    templateUrl: "views/internet-connectivity.traffic-speed.html",
                    controller: "TrafficSpeedController"
                }
            }, {
                name: "user.internetConnectivity.splitted3g",
                state: {
                    url: "/3g-v2",
                    templateUrl: "views/internet-connectivity.splitted3g.html",
                    controller: "Backup3gController",
                    data: {
                        module: "internetConnectivitySplitLTE"
                    }
                }
            }, {
                name: "user.internetConnectivity.splitted3g.general",
                state: {
                    url: "/general",
                    templateUrl: "views/internet-connectivity.splitted3g.general.html"
                }
            }, {
                name: "user.internetConnectivity.splitted3g.statistics",
                state: {
                    url: "/statistics",
                    templateUrl: "views/internet-connectivity.splitted3g.statistics.html"
                }
            }, {
                name: "user.internetConnectivity.3g",
                state: {
                    url: "/3g",
                    templateUrl: "views/internet-connectivity.3g.html",
                    controller: "Backup3gController"
                }
            }, {
                name: "user.internetConnectivity.qos",
                state: {
                    url: "/qos",
                    templateUrl: "views/internet-connectivity.qos.main.html",
                    data: {
                        module: "qos"
                    }
                }
            }, {
                name: "user.internetConnectivity.qos.configuration",
                state: {
                    url: "/configuration",
                    templateUrl: "views/internet-connectivity.qos.configuration.html",
                    controller: "QoSConfigurationController",
                    data: {
                        module: "qos"
                    }
                }
            }, {
                name: "user.internetConnectivity.qos.queueConfiguration",
                state: {
                    url: "/queueConfiguration",
                    templateUrl: "views/internet-connectivity.qos.queue-configuration.html",
                    controller: "QoSQueueController",
                    data: {
                        module: "qos"
                    }
                }
            }, {
                name: "user.internetConnectivity.qos.classification",
                state: {
                    url: "/classification",
                    templateUrl: "views/internet-connectivity.qos.classification.html",
                    controller: "QoSClassificationController",
                    data: {
                        module: "qos"
                    }
                }
            }, {
                name: "user.internetConnectivity.qos.policer",
                state: {
                    url: "/policer",
                    templateUrl: "views/internet-connectivity.qos.policer.html",
                    controller: "QoSPolicerController",
                    data: {
                        module: "qos"
                    }
                }
            }, {
                name: "user.internetConnectivity.basic",
                state: {
                    url: "/basic",
                    templateUrl: "views/internet-connectivity.basic.html",
                    data: {
                        module: "internetConnectivityWanBasic"
                    }
                }
            }, {
                name: "user.internetConnectivity.basic.ipv4",
                state: {
                    url: "/ipv4",
                    templateUrl: "views/internet-connectivity.ipv4.html",
                    controller: "SimpleController",
                    data: {
                        module: "internetConnectivityWanBasic"
                    }
                }
            }, {
                name: "user.internetConnectivity.ipv6",
                state: {
                    url: "/ipv6",
                    templateUrl: "views/internet-connectivity.ipv6.html"
                }
            }, {
                name: "user.internetConnectivity.basic.simpleIpv6",
                state: {
                    url: "/simpleIpv6",
                    templateUrl: "views/internet-connectivity.ipv6Simple.html",
                    controller: "SimpleIPv6Controller",
                    data: {
                        module: "simpleIpv6"
                    }
                }
            }, {
                name: "user.internetConnectivity.simpleIpv6",
                state: {
                    url: "/simpleIPv6",
                    templateUrl: "views/internet-connectivity.ipv6Simple.html",
                    controller: "SimpleIPv6Controller",
                    data: {
                        module: "simpleIPv6Main"
                    }
                }
            }, {
                name: "user.internetConnectivity.gpon",
                state: {
                    url: "/gpon",
                    templateUrl: "views/internet-connectivity.gpon.html",
                    controller: "GponController"
                }
            }, {
                name: "user.internetConnectivity.bridgemodeInternetPage",
                state: {
                    url: "/bridgemode",
                    templateUrl: "views/mysagemcombox.bridge-mode.html",
                    controller: "BridgeModeController",
                    data: {
                        module: "bridgemodeInternetPage"
                    }
                }
            }, {
                name: "user.sip",
                state: {
                    url: "/sip-settings",
                    templateUrl: "views/sip-settings.main.html",
                    data: {
                        module: "sip"
                    }
                }
            }, {
                name: "user.sip.telephones",
                state: {
                    url: "/telephones-matrix",
                    templateUrl: "views/sip-telephones.matrix.html",
                    controller: "TelephonesMatrixController"
                }
            }, {
                name: "user.sip.callsettings",
                state: {
                    url: "/call-settings",
                    templateUrl: "views/sip-settings.call-settings.html",
                    controller: "CallBlockingController"
                }
            }, {
                name: "user.sip.settings",
                state: {
                    url: "/settings",
                    templateUrl: "views/sip-settings.settings.html",
                    controller: "SipSettingsController"
                }
            }, {
                name: "user.inTwo",
                state: {
                    url: "/inTwo",
                    templateUrl: "views/intwo-main.html"
                }
            }, {
                name: "user.webradio",
                state: {
                    url: "/web-radio",
                    templateUrl: "views/webradio.html"
                }
            }, {
                name: "user.inTwo.device",
                state: {
                    url: "/device",
                    templateUrl: "views/intwo-device.html"
                }
            }, {
                name: "user.inTwo.settings",
                state: {
                    url: "/settings",
                    templateUrl: "views/intwo-settings.html"
                }
            }, {
                name: "user.dect",
                state: {
                    url: "/dect",
                    templateUrl: "views/dect.main.html"
                }
            }, {
                name: "user.dect.basic",
                state: {
                    url: "/basic",
                    templateUrl: "views/dect.basic.html",
                    controller: "DectBasicController"
                }
            }, {
                name: "user.dect.advanced",
                state: {
                    url: "/advanced",
                    templateUrl: "views/dect.advanced.html",
                    controller: "DectAdvancedController",
                    data: {
                        module: "dectAdvanced"
                    }
                }
            }, {
                name: "user.dectHandset",
                state: {
                    url: "/dectHandset/:uid",
                    templateUrl: "views/dect.handset.main.html",
                    controller: "DectHandsetMainController"
                }
            }, {
                name: "user.dectHandset.handset",
                state: {
                    url: "/handset",
                    templateUrl: "views/dect.handset.handset.html",
                    controller: "DectHandsetController"
                }
            }, {
                name: "user.dectHandset.advanced",
                state: {
                    url: "/advanced",
                    templateUrl: "views/dect.handset.advanced.html",
                    controller: "DectHandsetController"
                }
            }, {
                name: "user.scheduling",
                state: {
                    url: "/scheduling/:scheduleType/:mode",
                    templateUrl: "views/scheduling.main.html",
                    controller: "SchedulingMainController"
                }
            }, {
                name: "user.scheduling.control",
                state: {
                    url: "/control/",
                    templateUrl: "views/scheduling.control.html",
                    controller: "SchedulingController"
                }
            }],
            admin: [{
                name: "admin",
                state: {
                    "abstract": !0,
                    templateUrl: "views/base.html",
                    data: {
                        access: b.admin
                    }
                }
            }],
            onu: [{
                name: "onu",
                state: {
                    "abstract": !0,
                    templateUrl: "views/base.html",
                    data: {
                        access: b.admin
                    }
                }
            }],
            internal: [{
                name: "internal",
                state: {
                    "abstract": !0,
                    templateUrl: "views/base.html",
                    data: {
                        access: b.internal
                    }
                }
            }],
            poweruser: [{
                name: "poweruser",
                state: {
                    "abstract": !0,
                    templateUrl: "views/base.html",
                    data: {
                        access: b.internal
                    }
                }
            }],
            mso: [{
                name: "mso",
                state: {
                    "abstract": !0,
                    templateUrl: "views/base.html",
                    data: {
                        access: b.mso
                    }
                }
            }],
            voip: [{
                name: "voip",
                state: {
                    "abstract": !0,
                    templateUrl: "views/base.html",
                    data: {
                        access: b.voip
                    }
                }
            }]
        },
        mobile: {}
    }
}
;
var profile = {
    comhem: {
        expertMode: !1,
        cssTheme: "styles/themes/comhem-theme.css",
        cssLogin: "styles/login-comhem.css",
        mainTheme: "styles/themes/comhem-main.css",
        title: "Com Hem WiFi Hub",
        headerModel: "",
        partnerUrl: "https://comhem.se",
        allowedLanguages: {
            "default": ["EN"]
        },
        subProfiles: [{
            name: "unbranded",
            condition: function() {
                var a = "";
                try {
                    a = $.cookie("subprofile") || "";
                    var b = $.xmo.getHwVersion();
                    b && b !== a && (a = b,
                    $.cookie("subprofile", b))
                } catch (c) {
                    console.error("[DEBUG] fail to load the sub profile! error:", c)
                } finally {
                    return "3.0_CU" === a
                }
            }
        }],
        ipv6Certified: !1,
        languageDropDownList: !1,
        blockedSecurityModes: [],
        allowedUsers: null,
        blockedUsers: ["guest"],
        favicon: "images/comhem/comhem-favicon.ico",
        simpleLogin: !0,
        staticUserLogin: !1,
        simpleMaintenance: !1,
        extendedMenus: !1,
        hasExternalHelp: !0,
        connectionTypeIPv4Options: [{
            name: "IP",
            value: "DHCP"
        }, {
            name: "PPP",
            value: "PPP"
        }],
        suggestChangeDefaultPassword: !1,
        internetProducts: [{
            type: "FTTH",
            label: "Fiber"
        }],
        noDslImage: "FTTH_noDSL",
        showInactiveDevices: !1,
        showAllPlcDevices: !1,
        reverseHeaderControls: !1,
        onChangeSave: !1,
        wanBlockingEnable: !0,
        changeDSLToFast: !1,
        ipv6SimpleReadOnly: !0,
        defaultUserLogin: "admin",
        hideTable: {
            enabled: !0,
            checkFeatureEnabled: !0,
            buildModeEnabled: !0,
            buildModeCheckFeatureEnabled: !0,
            buildModeDisabledURLs: []
        },
        bridgedBlockedFeatures: [{
            state: "user.mysagemcombox.dhcp",
            feature: "lanIpv4"
        }, {
            state: "user.mysagemcombox.lanIpv6",
            feature: "lanIpv6"
        }, {
            state: "user.mysagemcombox.ddns",
            feature: "dyndns"
        }, {
            state: "user.mysagemcombox.maintenance.ntp",
            feature: "ntp"
        }, {
            state: "user.accessControl.parentalControl",
            feature: "parentalControl"
        }, {
            state: "user.accessControl.portForwarding",
            feature: "portForwarding"
        }, {
            state: "user.accessControl.portTriggering",
            feature: "portTriggering"
        }, {
            state: "user.accessControl.firewall",
            feature: "firewall"
        }, {
            state: "user.accessControl.dmz",
            feature: "dmz"
        }, {
            state: "user.internetConnectivity.basic.ipv4",
            feature: "simpleIpv4"
        }, {
            state: "user.ethernetDevice.parentalControl",
            feature: "parentalControlDevice"
        }, {
            state: "user.ethernetDevice.portForwarding",
            feature: "portForwardingDevice"
        }, {
            state: "user.ethernetDevice.dmz",
            feature: "dmzDevice"
        }, {
            feature: "networkMapNewRule"
        }, {
            state: "user.mysagemcombox.deviceInfo.arp",
            feature: "arpTable"
        }, {
            feature: "nowifi"
        }],
        dynamicRoute: {
            wifi: [{
                feature: "wifiBasic",
                state: "user.wifi.basic",
                url: "/wifidual/:radio/:mode/basic"
            }, {
                feature: "wifiWPS",
                state: "user.wifi.wps",
                url: "/wifidual/:radio/:mode/wps"
            }, {
                feature: "wifiStats",
                state: "user.wifi.stats",
                url: "/wifidual/:radio/:mode/stats"
            }, {
                feature: "wifiAdvanced",
                state: "user.wifi.advanced",
                url: "/wifidual/:radio/:mode/advanced"
            }],
            accessControl: [{
                feature: "parentalControl",
                state: "user.accessControl.parentalControl",
                url: "/access-control/parental-control"
            }, {
                feature: "portForwarding",
                state: "user.accessControl.portForwarding",
                url: "/access-control/port-forwarding"
            }, {
                feature: "portTriggering",
                state: "user.accessControl.portTriggering",
                url: "/access-control/port-triggering"
            }, {
                feature: "firewall",
                state: "user.accessControl.firewall",
                url: "/access-control/firewall"
            }, {
                feature: "wifiMacFilter",
                state: "user.accessControl.wifi.mac-filter",
                url: "/access-control/wifi/wifiBothBands/priv/mac-filter"
            }, {
                feature: "dmz",
                state: "user.accessControl.dmz",
                url: "/access-control/dmz"
            }],
            internetConnectivity: [{
                feature: "simpleIpv4",
                state: "user.internetConnectivity.basic.ipv4",
                url: "/internetConnectivity/basic/ipv4"
            }, {
                feature: "simpleIpv6",
                state: "user.internetConnectivity.basic.simpleIpv6",
                url: "/internetConnectivity/basic/simpleIpv6"
            }, {
                feature: "docsis",
                state: "user.internetConnectivity.docsis",
                url: "/internetConnectivity/docsis"
            }, {
                feature: "bridgemode",
                state: "user.internetConnectivity.bridgemode",
                url: "/internetConnectivity/bridgemode"
            }, {
                feature: "trafficSpeed",
                state: "user.internetConnectivity.trafficSpeed",
                url: "/internetConnectivity/trafficSpeed"
            }]
        },
        modules: {
            staticDNS: !1,
            firmwareVersion: !0,
            dyndns: {
                showIpv4Address: !1
            },
            dropboxRestrictMode: !1,
            simpleUserPage: !0,
            textPassword: !1,
            speedTestGauge: !0,
            main: {
                xpathForProductName: "Device/DeviceInfo/ModelName",
                showAllDevices: !1,
                showIpv6Address: !1
            },
            phonebook: {
                allowDuplicatedNumber: !0
            },
            internetConnectivity: {
                editStaticIp: !1,
                editIPv4Simple: !1,
                editIPv6Simple: !0,
                showAddressingType: !1,
                linkGoHome: !1,
                newDelegatedPrefix: !0,
                addressingTypePPP: !0,
                showStaticFields: !0,
                DNSManager: !1,
                defaultRoute: !0,
                interfaceTypeAll: !1,
                disabledOnADSL: !1,
                disabledOnVDSL: !1,
                editIpv6: !1,
                changeIpv4AliasBridgeMode: !0
            },
            useNewDHCPXpath: !1,
            hasMenuVertical: !1,
            newDNS: !0,
            myBox: {
                deviceInfo: {
                    modelName: !1,
                    maxLines: 1,
                    globalIpv6IgnoreOrigin: !0,
                    globalIpv6CheckAlias: !0,
                    globalIpv6Wan: "managers",
                    cpuLoadField: "1_5_15",
                    secondaryDnsIPv6: !0
                },
                deviceTypes: [{
                    type: "MISCELLANEOUS",
                    icon: "miscellaneous"
                }, {
                    type: "COMPUTER",
                    icon: "pc",
                    iconsvg: "images/sprite.svg?new#icon-desktop"
                }, {
                    type: "PHONE",
                    icon: "smartphone"
                }, {
                    type: "NETWORKACCESSPOINT",
                    icon: "nap"
                }, {
                    type: "AUDIOVIDEO",
                    icon: "audiovideo"
                }, {
                    type: "PERIPHERAL",
                    icon: "peripheral"
                }, {
                    type: "IMAGING",
                    icon: "imaging"
                }, {
                    type: "NOTEBOOKS",
                    icon: "notebook"
                }, {
                    type: "GAMECONSOLE",
                    icon: "game"
                }, {
                    type: "STORAGE",
                    icon: "usb"
                }, {
                    type: "BLACKLISTED",
                    icon: "blacklisted"
                }, {
                    type: "HIDDEN",
                    icon: "hidden"
                }, {
                    type: "PRINTER",
                    icon: "printer"
                }, {
                    type: "TABLET",
                    icon: "tablet",
                    iconsvg: "images/comhem/sprite.svg?new#icon-tablet"
                }, {
                    type: "MOBILE_PHONE",
                    icon: "smartphone",
                    iconsvg: "images/comhem/sprite.svg?new#icon-mobile"
                }, {
                    type: "TV_DECODER",
                    icon: "tv"
                }, {
                    type: "WIFI_BRIDGE",
                    icon: "wifibridge"
                }, {
                    type: "WIFI_REPEATER",
                    icon: "wifirepeater"
                }, {
                    type: "PLC",
                    icon: "plc"
                }, {
                    type: "FEMTO",
                    icon: "femto"
                }, {
                    type: "NETWORK_STORAGE",
                    icon: "network-storage"
                }],
                dhcp: {
                    defaultValues: {
                        dhcpEnable: !0,
                        gatewayIp: "192.168.0.1",
                        subnetMask: "255.255.255.0",
                        ipv4PoolStart: "192.168.0.2",
                        ipv4PoolEnd: "192.168.0.254",
                        ipv4Lease: 3600,
                        ipv4TvPoolEnable: !1,
                        ipv4TvPoolStart: "",
                        ipv4TvPoolEnd: ""
                    },
                    updateDNS: !0,
                    updateGuestDNS: !1,
                    ipv4DefaultGwInput: "input",
                    predefinedIpRange: null,
                    ipv4LeaseInput: "select",
                    hostNameUpdate: !1
                },
                statistics: {
                    accordion: !0,
                    ethernetBitrate: "AUTO"
                },
                maintenance: {
                    horizontalTabs: !1,
                    editNTP: !0
                },
                dns: {
                    editDNS: !0,
                    specialCharacters: !0
                },
                nacoStatus: !0
            },
            scheduling: {
                "2.4GHz": {
                    title: "wifiScheduleTitle",
                    enableLabel: "enable",
                    scheduleEnableTip: "wifiScheduleEnableTip",
                    scheduleTableTip: "wifiScheduleTableTip"
                },
                "5GHz": {
                    title: "wifiScheduleTitle",
                    enableLabel: "enable",
                    scheduleEnableTip: "wifiScheduleEnableTip",
                    scheduleTableTip: "wifiScheduleTableTip"
                },
                wifiBothBands: {
                    title: "wifiScheduleTitle",
                    enableLabel: "enable",
                    scheduleEnableTip: "wifiScheduleEnableTip",
                    scheduleTableTip: "wifiScheduleTableTip"
                }
            },
            cableModem: {
                connection: {
                    round: {
                        enable: !0,
                        precisions: {
                            powerlevel: 1,
                            snr: 1
                        }
                    }
                }
            },
            wifi: {
                dual: !0,
                macfilterDual: !0,
                schedulingDual: !0,
                removeBandTitle: !0,
                wirelessEnvironmentCount: !1,
                wifi5MasterRadio: !1,
                wifiBandSteeringSupport: !0,
                removeWifiSteeringStatus: !0,
                wifiSchedulingEnabled: !0,
                wifiBandSteeringHidentStatusNotPresent: !0,
                alwaysShowCurrentChannel: !0,
                bandSteeringSplitWithSameName: !0,
                bandSteeringByMDW: !0,
                availableChannels: {
                    "2.4GHz": "1,6,11"
                },
                wifiSSIDInclusive: !1,
                wifiForbiddenChars: /[#]/,
                vmmHidenWifiModeACandN: !1,
                wps: {
                    configMethodXpath: "configMethodsEnabled",
                    overrideMethods: ""
                },
                oneRequestOnly: !1,
                oneRequestOnlyPriv: !0,
                oneRequestOnlyForWPS: !1,
                ssidKeyRules: /^[^\s][\x20-\x7E]*[^\s]$/,
                wirelessKeyRules: {
                    WPA2: /^[\x21-\x7E][\x20-\x7E]{6,61}[\x21-\x7E]$/,
                    WPA_PERSONAL: /^[\x21-\x7E][\x20-\x7E]{6,61}[\x21-\x7E]$/,
                    WPA_ENTERPRISE: /^[\x21-\x7E][\x20-\x7E]{6,61}[\x21-\x7E]$/,
                    WEP_64: /^[\x21-\x7E][\x20-\x7E]{8}[\x21-\x7E]$|^[\x21-\x7E][\x20-\x7E]{3}[\x21-\x7E]$/,
                    WEP_128: /^[\x21-\x7E][\x20-\x7E]{24}[\x21-\x7E]$|^[\x21-\x7E][\x20-\x7E]{11}[\x21-\x7E]$/
                },
                radioOnly: !1,
                wifiAliases: {},
                blockedSecurityModesByStandards: {},
                wifi24: {},
                wifi5: {},
                wshdDevicesMgt: !0
            },
            accessControl: {
                parentalControlService: "ParentalControlNew",
                customSequenceWeekDayNew: {
                    1: 1e6,
                    2: 1e5,
                    3: 1e4,
                    4: 1e3,
                    5: 100,
                    6: 10,
                    7: 1
                },
                remoteAccess: {
                    blockedModes: ["ssh", "telnet"]
                },
                advancedOptions: {
                    removeConfigAdmin: !0
                },
                firewall: {
                    editFirewall: !0,
                    ipv6Firewall: !0
                },
                user: {
                    editHierarchy: {}
                },
                gatewayTime: !1,
                removeUPNPRules: !1,
                bitmaskConfig: !1,
                portTriggeringSaveEnableWithoutApply: !0
            },
            SIPsettings: {
                singlePhoneLine: !0,
                profileDefaultValues: {
                    enable: !0,
                    localSelection: "DK",
                    voipDialpan: "(*x#|*xx#|*33*xxxxx#|*74*xxx.T|*75*xxx.T|*xx*xxxxx.#|*#xx#|#xx#|#33*xxxx#|00xxxxx.T|10xx11x|10xxxxxxx.T|116xxx|11xT|18xx|1[6-9]x.T|[2-9]xxxxxxx)",
                    sipProxyAddress: "",
                    sipProxyPort: 5060,
                    sipOutboundAddress: "",
                    sipOutboundInternalAddress: "",
                    sipOutboundPort: 5060,
                    sipUserAgentAddress: "",
                    sipUserAgentPort: 5060,
                    sipRegisterAddress: "",
                    sipRegisterPort: 5060,
                    enableT38: !1,
                    registrationExpireTimeout: 1800,
                    registrationRetryInterval: 240,
                    dscpSIP: "",
                    dscpRTP: "",
                    dtmfRelay: "",
                    hookFlashRelay: "",
                    sipTrasportProtocol: "",
                    cidSignalProtocol: "",
                    enableSipTagMatching: "",
                    musicServer: "",
                    musicServerPort: ""
                }
            },
            fon: {
                SSIDProfiles: []
            },
            reinitializeWithFactory: !0,
            showConnectionFrequency: !0,
            portForwarding: {
                rulesNotEditable: ["UPNP", "HIDDEN"],
                rulesNotRemovable: ["UPNP", "HIDDEN"],
                rulesNotDisplayed: []
            },
            firewall: {
                rulesNotDisplayed: []
            },
            tvBox: {
                name: ""
            },
            staticTZ: [{
                label: "Singapore GMT-8",
                value: "SGT-8"
            }, {
                label: "Central Indonesia GMT-8",
                value: "AST-8"
            }, {
                label: "Eastern Indonesian GMT-9",
                value: "SGT-9"
            }, {
                label: "Western Indonesian GMT-7",
                value: "SGT-7"
            }, {
                label: "New Zealand Daylight GMT-13",
                value: "SGT-13"
            }, {
                label: "New Zealand Standard GMT-12",
                value: "SGT-12"
            }, {
                label: "Australian Central Daylight Savings GMT-10:30",
                value: "CST-10:30"
            }, {
                label: "Australian Central Standard GMT-9:30",
                value: "CST-9:30"
            }, {
                label: "Australian Eastern Daylight Savings GMT-11",
                value: "SGT-11"
            }, {
                label: "Australian Eastern Standard GMT-10",
                value: "AEST-10AEDT,M10.5.0,M3.5.0/3"
            }, {
                label: "Australian Western Standard GMT-8",
                value: "JST-9"
            }, {
                label: "Central Standard Time (Australia) GMT-9:30",
                value: "AST-9:30"
            }, {
                label: "Central Summer Time (Australia) GMT-10:30",
                value: "AST-10:30"
            }, {
                label: "Central Western Standard Time (Australia) GMT-8:45",
                value: "CST-8:45"
            }, {
                label: "Eastern Summer Time (Australia) GMT-11",
                value: "AST-11"
            }, {
                label: "Eastern Standard Time (Australia) GMT-10",
                value: "AST-10"
            }]
        },
        hideWanLayerForNonInternal: !0,
        hideLanIPv6Options: !1,
        userPermissionsChanges: {
            admin: {
                remoteAccess: {
                    enable: !0
                },
                wifiMacFilter: {
                    enable: !0
                },
                statistics: {
                    enable: !0
                },
                statisticsLan: {
                    enable: !0
                },
                statisticsWanLayer3: {
                    enable: !0
                },
                statisticsWanLayer2: {
                    enable: !0
                },
                statisticsWanLayer1: {
                    enable: !0
                },
                dhcpLeases: {
                    enable: !0
                },
                dhcpLeasesInDHCP: {
                    enable: !1
                },
                dhcpIPv6InDHCP: {
                    enable: !0
                },
                arpTable: {
                    enable: !0
                },
                lanIpv4: {
                    enable: !0
                },
                lanIpv6: {
                    enable: !0
                },
                lanIpv6Router: {
                    enable: !1
                },
                lanDhcpv6: {
                    enable: !1
                },
                portForwarding: {
                    enable: !0
                },
                portForwardingDevice: {
                    enable: !1
                },
                portForwardingUpnpReadOnly: {
                    enable: !0
                },
                dmz: {
                    enable: !0
                },
                dmzDevice: {
                    enable: !1
                },
                docsis: {
                    enable: !0
                }
            }
        },
        featureAccess: {
            internal: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1
            },
            acs: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1
            },
            sagemcom: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1
            },
            admin: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1
            },
            expert: {
                trafficSpeed: !0,
                trafficSpeedGauge: !0
            }
        },
        roleFeature: {
            ENDUSER: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1,
                firmwareUpgrade: !1
            },
            SUPPORT: {
                trafficSpeed: !0,
                trafficSpeedGauge: !0,
                firmwareUpgrade: !0
            },
            INTERNAL: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1,
                firmwareUpgrade: !0
            },
            ANONYMOUS: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1,
                firmwareUpgrade: !1
            }
        },
        showedpages: {
            guiAccessRights: {
                enable: !1
            },
            wifiRestoreDefault: {
                enable: !1
            },
            showThrottleStateWarning: {
                enable: !1
            },
            bootloaderVersion: {
                enable: !1
            },
            IPv4DHCPImmutable: {
                enable: !1
            },
            fiberModal: {
                enable: !0
            },
            jtx: {
                enable: !1
            },
            smartWifi: {
                enable: !1
            },
            docsisNetworkparamsModemBasicInfo: {
                enable: !0
            },
            docsisRfParamsHideFrequency: {
                enable: !0
            },
            ipv4ConnectionStatus: {
                enable: !1
            },
            lanIpv6AddressAutoconfiguration: {
                enable: !1
            },
            tabGeneral: {
                enable: !0
            },
            DnsFromOnlyOneWay: {
                enable: !0
            },
            FirewallButtons: {
                enable: !1
            },
            cableVoiceSettingsAdvanced: {
                enable: !1
            },
            cableEthernetWan: {
                enable: !1
            },
            charter5280: {
                enable: !1
            },
            quickSetupWizard: {
                enable: !1
            },
            duplexMode: {
                enable: !0
            },
            currentBitRate: {
                enable: !1
            },
            comhem: {
                enable: !0
            },
            driverVersion: {
                enable: !1
            },
            firstInstall: {
                enable: !1
            },
            deviceInfoWANxdslSection: {
                enable: !1
            },
            internetUtilitiesTR69: {
                enable: !1
            },
            landPage: {
                enable: !1
            },
            landPageCheck: {
                enable: !1
            },
            landPageCheckCellcom: {
                enable: !1
            },
            plmnBackup3g: {
                enable: !1
            },
            headerConnectionInfos: {
                enable: !1
            },
            cellidentityBackup3g: {
                enable: !1
            },
            firstInstallMaintenance: {
                enable: !1
            },
            firstInstallWizard: {
                enable: !1
            },
            checkValidHost: {
                enable: !1
            },
            dslEnabled: {
                enable: !1,
                models: {
                    "5DK40-": !0,
                    "5DK45-": !0,
                    "5DK45eWR-": !1
                }
            },
            mobile: {
                enable: !1
            },
            mobileLinks: {
                enable: !1
            },
            mobileWifiSchedule: {
                enable: !1
            },
            mobileWifiStrength: {
                enable: !1
            },
            firewallButtonsCustom: {
                enable: !0
            },
            docsis: {
                enable: !0
            },
            deviceInfoNATEntries: {
                enable: !1
            },
            docsisNetworkparams: {
                enable: !0
            },
            docsisRfparams: {
                enable: !0
            },
            docsisMTA: {
                enable: !0
            },
            docsisConnection: {
                enable: !0
            },
            docsisConfiguration: {
                enable: !0
            },
            docsisConfigurationResetAndReboot: {
                enable: !1
            },
            logo: {
                enable: !0
            },
            logoInternalFooter: {
                enable: !0
            },
            logoLinkToSagemcom: {
                enable: !1
            },
            logoWait: {
                enable: !0
            },
            modelAndFirmwareVersionHeader: {
                enable: !1
            },
            intwo: {
                enable: !1
            },
            webradio: {
                enable: !1
            },
            myCloud: {
                enable: !1
            },
            qrCodes: {
                enable: !0
            },
            mfpMode: {
                enable: !1
            },
            BoBStatus: {
                enable: !1
            },
            voicePorts: {
                enable: !0
            },
            pulseDialing: {
                enable: !1
            },
            voicePortsMultiProfile: {
                enable: !1
            },
            voicePortsSingleProfile: {
                enable: !0
            },
            sipStatusVoice: {
                enable: !1
            },
            sipErrorVoice: {
                enable: !1
            },
            removeTabsVoice: {
                enable: !0
            },
            guestInfo24: {
                enable: !1
            },
            guestInfo50: {
                enable: !1
            },
            vpivci: {
                enable: !1
            },
            vlandId: {
                enable: !1
            },
            social: {
                enable: !1
            },
            portForwardingLink: {
                enable: !1
            },
            DNSLink: {
                enable: !1
            },
            parentalLink: {
                enable: !1
            },
            voipLink: {
                enable: !1
            },
            twonkyLink: {
                enable: !1
            },
            headerInfo: {
                enable: !1
            },
            phonebook: {
                enable: !1
            },
            phonebookcall: {
                enable: !1
            },
            callLogCallOption: {
                enable: !0
            },
            phonebookAddShowNumber: {
                enable: !1
            },
            answeringMachine: {
                enable: !1
            },
            sip: {
                enable: !0
            },
            telephoneMatrix: {
                enable: !0
            },
            lineUri: {
                enable: !1
            },
            hotspotEnable: {
                enable: !1
            },
            showTabTelephoneMatrix: {
                enable: !0
            },
            callSettings: {
                enable: !0
            },
            callForwarding: {
                enable: !0
            },
            callForwardingVoicemail: {
                enable: !0
            },
            callSettingsDebug: {
                enable: !0
            },
            callSettingsAdvanced: {
                enable: !0
            },
            callSettingsAdvancedStatus: {
                enable: !0
            },
            callWaitingAdvanced: {
                enable: !1
            },
            manageLineURI: {
                enable: !1
            },
            lineDetails: {
                enable: !0
            },
            ecoMode: {
                enable: !1
            },
            route: {
                enable: !1
            },
            monitoring: {
                enable: !1
            },
            lanIpv6: {
                enable: !1
            },
            dhcppdSection: {
                enable: !0
            },
            wifi5g: {
                enable: !0
            },
            wifi24g: {
                enable: !0
            },
            lanIpv4: {
                enable: !0,
                rename: "LAN & DHCP"
            },
            dhcpEnable: {
                enable: !0
            },
            natSettings: {
                enable: !1
            },
            deviceInfoNAT: {
                enable: !1
            },
            lanIpv4TvPool: {
                enable: !1
            },
            ipReservation: {
                enable: !0
            },
            ipLeaseTime: {
                enable: !0
            },
            restoreDhcp: {
                enable: !0
            },
            restoreConfig: {
                enable: !0
            },
            datapump: {
                enable: !1
            },
            guiVersion: {
                enable: !1
            },
            statistics: {
                enable: !0
            },
            statisticsEthenet: {
                enable: !1
            },
            statisticsType: {
                enable: !1
            },
            statisticsLan: {
                enable: !0
            },
            statisticsWanLayer3: {
                enable: !1
            },
            statisticsWanLayer2: {
                enable: !1,
                models: {
                    "5DK40-": !0,
                    "5DK45-": !0,
                    "5DK45eWR-": !1
                }
            },
            statisticsWanLayer1: {
                enable: !1,
                models: {
                    "5DK40-": !0,
                    "5DK45-": !0,
                    "5DK45eWR-": !1
                }
            },
            statisticsWanFTTH: {
                enable: !1
            },
            dhcpLeases: {
                enable: !1
            },
            dhcpLeasesInDHCP: {
                enable: !0
            },
            dhcpIPv6InDHCP: {
                enable: !0
            },
            arpTable: {
                enable: !0
            },
            myMedia: {
                enable: !1,
                rename: "Media"
            },
            myMediaExtras: {
                enable: !0
            },
            myMediaExtrasPrinter: {
                enable: !1
            },
            myMediaExtrasChangePassword: {
                enable: !1
            },
            bkpRestore: {
                enable: !0
            },
            firmwareUpgrade: {
                enable: !0
            },
            ntp: {
                enable: !1
            },
            ntpEnable: {
                enable: !1
            },
            tr69: {
                enable: !1
            },
            bandwidthChannelAutoWarning: {
                enable: !1
            },
            tr069SSLAuthentication: {
                enable: !1
            },
            internetUtilities: {
                enable: !1
            },
            traceRouteInterfaces: {
                enable: !0
            },
            logs: {
                enable: !0
            },
            securitylog: {
                enable: !1
            },
            systemLog: {
                enable: !1
            },
            upnplog: {
                enable: !1
            },
            operatorlog: {
                enable: !0
            },
            ping: {
                enable: !0
            },
            dnsQuery: {
                enable: !0
            },
            traceroute: {
                enable: !0
            },
            connectionUtilities: {
                enable: !1
            },
            healthCheck: {
                enable: !1
            },
            parentalControl: {
                enable: !0
            },
            parentalControlPlanning: {
                enable: !0
            },
            weekDaysNoBooleanConfig: {
                enable: !0
            },
            parentalControlTimeslot: {
                enable: !1
            },
            portTriggering: {
                enable: !0
            },
            firewallSetOFF: {
                enable: !1
            },
            firewall: {
                enable: !0
            },
            firewallDevice: {
                enable: !0
            },
            firewallRespondToPing: {
                enable: !1
            },
            ipv6Pinholling: {
                enable: !1
            },
            firewallIPv6: {
                enable: !1
            },
            firstIPv6DNS: {
                enable: !1
            },
            secondIPv6DNS: {
                enable: !1
            },
            ipv6dns: {
                enable: !1
            },
            certificates: {
                enable: !1
            },
            VPN: {
                enable: !1
            },
            parentalControlOlfeo: {
                enable: !1
            },
            parentalControlDevice: {
                enable: !0
            },
            parentalControlPrivate: {
                enable: !0
            },
            gamesAndApps: {
                enable: !0
            },
            selectUserPasswordChange: {
                enable: !0
            },
            internetConnectivityWanAdvanced: {
                enable: !1
            },
            internetConnectivityWanBasic: {
                enable: !0,
                rename: "WAN"
            },
            ipv4IptvSection: {
                enable: !1
            },
            ipv4VoipSection: {
                enable: !1
            },
            forceEditConnectionType: {
                enable: !1
            },
            manageVLAN: {
                enable: !1
            },
            trafficSpeed: {
                enable: !0
            },
            trafficSpeedNew: {
                enable: !0
            },
            trafficSpeedGauge: {
                enable: !0
            },
            qos: {
                enable: !1
            },
            backup3gLTE: {
                enable: !1,
                implementation: "cellular"
            },
            enableBackup3gLTE: {
                enable: !1
            },
            dongleVersionBackup3g: {
                enable: !1
            },
            failoverApnLte: {
                enable: !1
            },
            mobileParameters: {
                enable: !1
            },
            mptcpAPNstatus: {
                enable: !0
            },
            simpleIpv4: {
                enable: !0
            },
            authMethod3G: {
                enable: !1
            },
            pukCode3G: {
                enable: !1
            },
            simpleIpv6: {
                enable: !0
            },
            simpleIPv6Main: {
                enable: !1
            },
            ipv6: {
                enable: !1
            },
            DHCPv6Server: {
                enable: !1
            },
            wakeOnLan: {
                enable: !0
            },
            lanVlan: {
                enable: !1
            },
            wifiSpeedInfo: {
                enable: !1
            },
            wifiBasic: {
                enable: !0
            },
            wifiWepKey: {
                enable: !1
            },
            wifiBandSteering: {
                enable: !0,
                dependsOn: {
                    action: "hide",
                    criteria: function(a, b) {
                        return !b.go("wifiMeshBandsteering")
                    }
                }
            },
            wifiMeshBandsteering: {
                enable: !0,
                dependsOn: {
                    action: "hide",
                    criteria: function(a, b) {
                        return b.go("wifiMesh")
                    }
                }
            },
            wifiMesh: {
                enable: !0
            },
            bandSteeringWarning: {
                enable: !1
            },
            wifiMeshWarning: {
                enable: !1
            },
            wifiBandSteeringText: {
                enable: !1
            },
            wifiAlertSupportedChannel: {
                enable: !0
            },
            wifiWPS: {
                enable: !0
            },
            wifiStats: {
                enable: !0
            },
            wifiAdvanced: {
                enable: !0
            },
            advancedChannelSelection: {
                enable: !1
            },
            wifiTransmitPower: {
                enable: !1
            },
            wifiExtensionChannel: {
                enable: !1
            },
            wifiAlertChangingSecurity: {
                enable: !0
            },
            wifiCountry: {
                enable: !1
            },
            wifiMacFilter: {
                enable: !0
            },
            wifiDualTabs: {
                enable: !0
            },
            wifiDualTabsWPS: {
                enable: !1
            },
            wifiIsolation: {
                enable: !1
            },
            cyclicPrefix: {
                enable: !1
            },
            wirelessEnvironment: {
                enable: !0
            },
            wirelessRecommendedChannel: {
                enable: !1
            },
            communSettingsGuest: {
                enable: !1
            },
            globalMaxClients: {
                enable: !1
            },
            wirelessFullAdvanced: {
                enable: !1
            },
            wirelessScheduling: {
                enable: !0
            },
            wifibackhaul: {
                enable: !1
            },
            ledToggle: {
                enable: !1
            },
            ledMode: {
                enable: !0
            },
            wirelessGuestSSID: {
                enable: !1
            },
            wirelessWDS: {
                enable: !1
            },
            wirelessMSO: {
                enable: !1
            },
            remoteAccess: {
                enable: !1
            },
            remoteAccessLanOption: {
                enable: !1
            },
            remoteAccessTrustedIP: {
                enable: !1
            },
            remoteAccessVoipOption: {
                enable: !1
            },
            remoteAccessVoipAddress: {
                enable: !1
            },
            remoteAccessWanHTTPOption: {
                enable: !1
            },
            userAccess: {
                enable: !0
            },
            myGatewayUserAccess: {
                enable: !1
            },
            userAccessMaintenance: {
                enable: !0
            },
            remoteAccessChangeUser: {
                enable: !0
            },
            dns: {
                enable: !0
            },
            showdnsinfo: {
                enable: !0
            },
            led: {
                enable: !0
            },
            ledSlider: {
                enable: !0
            },
            autodimming: {
                enable: !1
            },
            dyndns: {
                enable: !0
            },
            portForwarding: {
                enable: !0
            },
            portForwardNatButton: {
                enable: !1
            },
            dmz: {
                enable: !0
            },
            natMapping: {
                enable: !1
            },
            sipRegistrationExpireTimeout: {
                enable: !0
            },
            sipForceDtmfBand: {
                enable: !0
            },
            sipFlashHookEnable: {
                enable: !0
            },
            gpon: {
                enable: !1
            },
            wifiSignalStrength: {
                enable: !1
            },
            internetSpeed: {
                enable: !0
            },
            dect: {
                enable: !1
            },
            dectSchedule: {
                enable: !1
            },
            dectVoice: {
                enable: !1
            },
            wifiSchedule: {
                enable: !0
            },
            ledsSchedule: {
                enable: !1
            },
            passwordTipLogin: {
                enable: !1
            },
            languageOptionLogin: {
                enable: !1
            },
            slideShowTitleLogin: {
                enable: !1
            },
            displayLoginSlideShow: {
                enable: !0
            },
            loginTitle: {
                enable: !1
            },
            usbEjectButton: {
                enable: !0
            },
            usbConfigurationLink: {
                enable: !1
            },
            dataCollector: {
                enable: !1
            },
            wpsMode: {
                enable: !0
            },
            bridgemode: {
                enable: !1
            },
            bridgemodeInternetPage: {
                enable: !0
            },
            bridgemodeAccessControlPage: {
                enable: !1
            },
            trafficHistory: {
                enable: !1
            },
            lte3gBackupApnParams: {
                enable: !0
            },
            lte3gBackupApnProxyParams: {
                enable: !0
            },
            quickView: {
                enable: !0
            },
            lineCallHistory: {
                enable: !1
            },
            ringTest: {
                enable: !1
            },
            ringTestTools: {
                enable: !1
            },
            wifiTV: {
                enable: !1
            },
            walledGarden: {
                enable: !1
            },
            dmzIPv6: {
                enable: !1
            },
            ipv6DefaultRangeAddress: {
                enable: !1
            },
            deviceInfoPreLogin: {
                enable: !1
            },
            stbManufaturer: {
                enable: !0
            },
            statisticsSFP: {
                enable: !0
            },
            massStorageUSB: {
                enable: !0
            },
            wifi24Schedule: {
                enable: !0
            },
            wifi5Schedule: {
                enable: !0
            },
            headerBoxesLogin: {
                enable: !0
            },
            headerControlsWifi: {
                enable: !0
            },
            bitrate: {
                enable: !0
            },
            showAddressingTypeSelect: {
                enable: !1
            },
            PPPoePassthrough: {
                enable: !1
            },
            bridgeModeBlockPages: {
                enable: !0
            },
            bridgeModeConnectionType: {
                enable: !1
            },
            loginOte: {
                enable: !1
            },
            nowifi: {
                enable: !0
            },
            connectPPPoE: {
                enable: !1
            },
            isCable: {
                enable: !0
            },
            extendInterfaceDescription: {
                enable: !0
            },
            interfaceLANDescription: {
                enable: !0
            },
            mySagemcomBoxAdvancedOptions: {
                enable: !0
            },
            homeWiFiBoxes: {
                enable: !0
            },
            networkMapNewRule: {
                enable: !0
            },
            dnsIPv6: {
                enable: !1
            },
            dnsIPv4: {
                enable: !0
            },
            authenticationProtocol: {
                enable: !1
            },
            dns1IPv4: {
                enable: !0
            },
            dns2IPv4: {
                enable: !0
            },
            wifiGuestRecommendChannel: {
                enable: !0
            },
            showIPSecPPTP: {
                enable: !1
            },
            CPULoadField: {
                enable: !1
            },
            memoryField: {
                enable: !1
            },
            usDsDisplay: {
                enable: !1
            },
            globalSip: {
                enable: !1
            },
            portMirror: {
                enable: !1
            },
            ssidCreation: {
                enable: !1
            },
            pingInterface: {
                enable: !1
            },
            advancedVoIPSettings: {
                enable: !0
            },
            outboundProxyInternal: {
                enable: !0
            },
            isSiminn: {
                enable: !1
            },
            masmovil: {
                enable: !1
            },
            mptcp: {
                enable: !1
            },
            reset: {
                enable: !0
            },
            dhcpEnablev6: {
                enable: !1
            },
            routerAdvertisementConfig: {
                enable: !1
            },
            ianaEnable: {
                enable: !1
            },
            IAPDEnable: {
                enable: !1
            },
            ulaIPv6Enabled: {
                enable: !1
            },
            lanIPv6LinkLocal: {
                enable: !0
            },
            ianaManualPrefixes: {
                enable: !1
            },
            DTMFTransmissionMode: {
                enable: !1
            },
            networkConfiguration: {
                enable: !1
            },
            wirelessEnableATF: {
                enable: !1
            },
            rejectRuleEnable: {
                enable: !1
            },
            statusBackup3gLTE: {
                enable: !0
            },
            mobTechStatusBackup3gLTE: {
                enable: !0
            },
            apnBackup3g: {
                enable: !1
            },
            daylightSavingTime: {
                enable: !1
            },
            wifi24Speed: {
                enable: !1
            },
            wifi5Speed: {
                enable: !1
            },
            DLNA: {
                enable: !0
            },
            MTU: {
                enable: !1
            },
            lanMTU: {
                enable: !1
            },
            wanMTU: {
                enable: !1
            },
            connectionServices: {
                enable: !1
            },
            pinCode3g: {
                enable: !1
            },
            busyOnBusy: {
                enable: !1
            },
            statusReason: {
                enable: !0
            },
            lineCallWaiting: {
                enable: !1
            },
            lineMailbox: {
                enable: !1
            },
            networkSettings: {
                enable: !1
            },
            userSessionTimeout: {
                enable: !0
            },
            ledDimmedMode: {
                enable: !1
            },
            antennaSettings: {
                enable: !1
            },
            displayPassword: {
                enable: !0
            },
            validateBlacklistedPort: {
                enable: !1
            },
            ipv4OnlineDuration: {
                enable: !1
            },
            ipVersionStatus: {
                enable: !1
            },
            statusDDns: {
                enable: !0
            },
            enableWMM: {
                enable: !0
            },
            wifiShowCurrentBandwidth: {
                enable: !1
            },
            lanPort4BridgeModeConfirmMsg: {
                enable: !0
            },
            licenses: {
                enable: !1
            },
            mobileOpBackup3g: {
                enable: !1
            },
            imsiBackup3g: {
                enable: !1
            },
            msisdnBackup3g: {
                enable: !1
            },
            imeiDeviceInfo: {
                enable: !1
            },
            hostnameReadOnly: {
                enable: !0
            },
            myMediaHiddenSharedName: {
                enable: !1
            },
            layerInterfaceMainPage: {
                enable: !1
            },
            layerInterfaceDeviceInfo: {
                enable: !1
            },
            showlte: {
                enable: !1
            },
            portScanDetection: {
                enable: !1
            },
            networkSettingWarnMessage: {
                enable: !0
            },
            authenticationModeGpon: {
                enable: !1
            },
            wifiEcoMode: {
                enable: !1
            },
            semiReset: {
                enable: !1
            },
            myBoxDeviceList: {
                enable: !1
            },
            showGreTitle: {
                enable: !0
            },
            showGreBackup: {
                enable: !0
            },
            hardwareAccelerate: {
                enable: !1
            },
            NAS: {
                enable: !1
            },
            shaperRate: {
                enable: !1
            },
            multiNAT: {
                enable: !1
            },
            spectrumWifi: {
                enable: !1
            },
            macFilterDualTabs: {
                enable: !1
            }
        },
        readOnlyPages: ["user.mysagemcombox.route.static"],
        globals: {
            welcome: {
                EN: "Com Hem WiFi Hub C2",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            welcomeC3: {
                EN: "Com Hem WiFi Hub C3",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            trafficSpeedMonitoring: {
                EN: "Wan speed Test",
                FR: "Test de vitesse Wan",
                ES: "Prueba de velocidad Wan",
                DE: "Wan Geschwindigkeitstest",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO"
            },
            mySagemcomBox: {
                EN: "Gateway Settings",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            lightSettings: {
                EN: "Light Settings",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            advancedOptions: {
                EN: "Firewall advanced",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip1: {
                EN: "Edit your device settings or check your network info here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip2: {
                EN: "Change your Internet access settings here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip3: {
                EN: "Check your Internet connection status here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mymediaMain: {
                EN: "Share content on devices connected to your Wi-Fi Halo's USB ports here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            bandSteeringOffAlert: {
                EN: "When band steering is enabled, Wi-Fi 2.4GHz and 5GHz SSID names and security parameters are identical. Devices will connect automatically to the best signal.",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip4: {
                EN: "Any devices connected directly to your gateway are here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip5: {
                EN: "Here's information about your 2.4GHz Wi-Fi network",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip9: {
                EN: "Here's information about your 5GHz Wi-Fi network",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip10: {
                EN: "Any devices connected to your Wi-Fi Halo's USB ports are here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wifiSpecificKeyRule: {
                EN: "The password is a combination of 8 random UPPERCASE letters and numbers, avoiding 'I' and '1'",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wifi5GChannelWarning: {
                EN: "The SSID may disappear to clients that do not support this channel. <br> Certain WiFi clients may not be capable of utilizing the selected channel.",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            ledModeOptionDark: {
                EN: "Dark",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            ledModeOptionLight: {
                EN: "Always On",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep1: {
                EN: "Step 1 of 5",
                FR: "Étape 1 sur 5",
                ES: "Paso 1 de 5",
                DE: "Schritt 1 von 5",
                IT: "Fase 1 di 5",
                DA: "Trin 1 af 5",
                AR: "الخطوة رقم 1 من عدد 5 خطوات",
                PT: "passo 1 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep2: {
                EN: "Step 2 of 5",
                FR: "Étape 2 sur 5",
                ES: "Paso 2 de 5",
                DE: "Schritt 2 von 5",
                IT: "Fase 2 di 5",
                DA: "Trin 2 af 5",
                AR: "الخطوة رقم 2 من عدد 5 خطوات",
                PT: "passo 2 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep4: {
                EN: "Step 3 of 5",
                FR: "Étape 3 sur 5",
                ES: "Paso 3 de 5",
                DE: "Schritt 3 von 5",
                IT: "Fase 3 di 5",
                DA: "Trin 3 af 5",
                AR: "الخطوة رقم 3 من عدد 5 خطوات",
                PT: "passo 3 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep5: {
                EN: "Step 4 of 5",
                FR: "Étape 4 sur 5",
                ES: "Paso 4 de 5",
                DE: "Schritt 4 von 5",
                IT: "Fase 4 di 5",
                DA: "Trin 4 af 5",
                AR: "الخطوة رقم 4 من عدد 5 خطوات",
                PT: "passo 4 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep6: {
                EN: "Step 5 of 5",
                FR: "Étape 5 sur 5",
                ES: "Paso 5 de 5",
                DE: "Schritt 5 von 5",
                IT: "Fase 5 di 5",
                DA: "Trin 5 af 5",
                AR: "الخطوة رقم 5 من عدد 5 خطوات",
                PT: "passo 5 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiNetName24: {
                EN: "2.4GHz SSID Name",
                FR: "Nom SSID 2.4GHz",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiNetName5: {
                EN: "5GHz SSID Name",
                FR: "Nom SSID 5GHz",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiNetEncrip24: {
                EN: "Wi-Fi Network Encription (2.4GHz)",
                FR: "Encryption Wi-Fi (2.4GHz)",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiNetEncrip5: {
                EN: "Wi-Fi Network Encription (5GHz)",
                FR: "Encryption Wi-Fi (5GHz)",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiKey24: {
                EN: "2.4GHz Security Key",
                FR: "Clé de sécurité 2.4GHz",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiKey5: {
                EN: "5GHz Security Key",
                FR: "Clé de sécurité 5GHz",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstInternetSetup: {
                EN: "Internet Setup",
                FR: "Configuration internet",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wanInterface: {
                EN: "WAN Interfaces",
                FR: "Interfaces WAN",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            quickSetupWizard: {
                EN: "Quick Setup Wizard",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wanType: {
                EN: "WAN Type",
                FR: "Type de WAN",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            accessWizard: {
                EN: "Access to wizard",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            timeZone: {
                EN: "Current Timezone",
                FR: "Fuseau horaire actuel",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            QSWDescription: {
                EN: "This setup allow you to view your gateway cables connection.",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            desiredPassword: {
                EN: "Desired Password",
                FR: "Mot de passe désiré",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            connectionType: {
                EN: "Connection Type",
                FR: "Type de connection",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            addressingType: {
                EN: "Addressing Type",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            skip: {
                EN: "Skip",
                FR: "Passer",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            channelTip3: {
                EN: "Selected channel might not be visible or supported by all wireless client",
                FR: "Le canal selectionné peut ne pas être visible ou supporté par tous les clients sans fil",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            passwordTip2: {
                EN: "WEP 64 mode requires a 5 or 10 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WEP 64 nécessite un mot de passse de 5 à 10 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WEP64 erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 5 und 10 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WEP 64 necessita una chiave di cifratura tra 5 e 10 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WEP 64 tilstand kræver en adgangskode på 5 eller 10 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WEP64 requer uma password de 5 ou 10 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "Modul WEP 64 necesita o parola de 5 sau 10 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WEP 64 üzemmódban 5 vagy 10 karakteres jelszó szükséges. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip3: {
                EN: "WEP 128 mode requires a 13 or 26 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WEP 128 nécessite un mot de passse de 13 à 26 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WEP128 erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 13 und 26 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WEP 128 necessita una chiave di cifratura tra 13 e 26 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WEP 128 tilstand kræver en adgangskode på 13 eller 26 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WEP128 requer uma password de 13 ou 26 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "Modul WEP 128 necesita o parola de 13 sau 26 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WEP 128 üzemmódban 13 vagy 26 karakteres jelszó szükséges. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip4: {
                EN: "WPA requires a 8-63 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WPA nécessite un mot de passse de 8 à 63 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WPA erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 8 und 63 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WPA necessita una chiave di cifratura tra 8 e 63 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WPA tilstand kræver en adgangskode på 8-63 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WPA requer uma password de 8-63 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "WPA necesita o parola de 8-63 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WPA 8-63 karakteres jelszót igényel. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip5: {
                EN: "WPA2 requires a 8-63 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WPA2 nécessite un mot de passse de 8 à 63 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WPA2 erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 8 und 63 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WPA2 necessita una chiave di cifratura tra 8 e 63 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WPA2 tilstand kræver en adgangskode på 8-63 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WPA2 requer uma password de 8-63 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "WPA2 necesita o parola de 8-63 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WPA2-nek 8-63 karakteres jelszó szükséges. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip6: {
                EN: "WPA requires a 8-63 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WPA nécessite un mot de passse de 8 à 63 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WPA erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 8 und 63 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WPA necessita una chiave di cifratura tra 8 e 63 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WPA tilstand kræver en adgangskode på 8-63 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "Modo WPA requer uma password de 8-63 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "WPA necesita o parola de 8-63 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WPA 8-63 karakteres jelszót igényel. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip8: {
                EN: "WPA2 Personal (AES) requires a 8-63 character password. You may use the following characters: 0-9, a-z, A-Z and +*%=-_! symbols",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            passwordTip7: {
                EN: "WPA/WPA2 Personal (TKIP/AES mixed) requires a 8-63 character password. You may use the following characters: 0-9, a-z, A-Z and +*%=-_! symbols",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            passwordTip9: {
                EN: "WPA3 requires a 8-63 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WPA3 nécessite un mot de passse de 8 à 63 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WPA3 erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 8 und 63 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WPA3 necessita una chiave di cifratura tra 8 e 63 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WPA3 tilstand kræver en adgangskode på 8-63 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WPA3 requer uma password de 8-63 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "WPA3 necesita o parola de 8-63 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WPA3-nek 8-63 karakteres jelszó szükséges. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            online: {
                EN: "ONLINE",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            offline: {
                EN: "OFFLINE",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            internet: {
                EN: "INTERNET",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            accessControl: {
                EN: "ACCESS CONTROL",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            maintenance: {
                EN: "Maintenance & Management",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO"
            },
            networkMapBoxMsg1: {
                EN: "There are",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            networkMapBoxMsg2: {
                EN: "connected device(s) on Ethernet and",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            networkMapBoxMsg3: {
                EN: "connected devices on Wi-Fi",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            off: {
                EN: "OFF",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            myNetwork: {
                EN: "My Network",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            networkMap: {
                EN: "Network Map",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            fileSharing: {
                EN: "SAMBA",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wanMACAddress: {
                EN: "HFC MAC Address",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "CM MAC-adresse",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            remoteAccess: {
                EN: "Admin interface access",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            remoteManagementTitle: {
                EN: "Admin interface access",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            basic_wan_status: {
                EN: "WAN Status",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            deviceinfo: {
                EN: "Device Information",
                FR: "Informations",
                ES: "Información del dispositivo",
                DE: "Geräteinformation",
                IT: "Informazioni del gateway",
                DA: "Enhedsoplysninger",
                AR: "معلومات الجهاز",
                PT: "informaçao do dispositivo",
                RO: "TODO",
                IND: "TODO"
            },
            wifiStats: {
                EN: "Wi-Fi Stats",
                FR: "Statistiques Wi-Fi",
                ES: "Estadísticas Wi-Fi",
                DE: "WLAN-Status",
                IT: "Statistiche Wi-Fi",
                DA: "Wi-Fi statistik",
                AR: "احصائيات واي فاي",
                PT: "estatisticas de Wi-Fi",
                RO: "TODO",
                IND: "TODO"
            },
            DOCSISVersion: {
                EN: "DOCSIS 3.1",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO"
            },
            internetUtilities: {
                EN: "Internet Utilities",
                FR: "Utilitaires Internet",
                ES: "Internet Utilidades",
                DE: "Internet-Anwendungen",
                IT: "Utilità Internet",
                DA: "Internetfunktioner",
                AR: "برامج خدمة الإنترنت",
                PT: "utilidades de internet",
                RO: "TODO",
                IND: "TODO"
            },
            resetExplained: {
                EN: "Factory reset will restore Gateway default options, you will lose all your changes.",
                FR: "La réinitialisation usine restaure les options par défaut du modem, vous perdrez toutes vos modifications.",
                ES: "El restablecimiento de la configuración predeterminada de fábrica restaurará las opciones predeterminadas del módem. Perderá todos los cambios realizados.",
                DE: "Das Rest auf die Werkseinstellungen wird die Gateway-Standardoptionen wiederherstellen. Alle Ihre Änderungen gehen verloren.",
                IT: "Il ripristino delle impostazioni predefinite ripristina le opzioni di gateway predefinite, si perderanno tutte le modifiche.",
                DA: "Nulstil til fabriksindstillinger vil gendanne standardmulighederne for gatewayen, og du mister alle dine ændringer.",
                AR: "سوف تستعيد عملية إعادة تعيين إعدادات المصنع الخياراتِ الافتراضية للبوابة، وستفقد كلَ ما عَمِلته من تغييرات.",
                PT: "o reset de fabrica faz o gateway voltar as opçoes de defeito, perderá todos as configuraçoes",
                RO: "TODO",
                IND: "TODO"
            },
            rebootExplained: {
                EN: "Restarting  will take a few minutes, check leds on your gateway to follow status.",
                FR: "Le redémarrage prendra quelques minutes, vérifiez les indicateurs lumineux de votre modem pour connaitre son statut.",
                ES: "El reinicio llevará unos minutos. Compruebe los indicadores luminosos de su módem para conocer el estado.",
                DE: "Der Neustart kann einige Minuten dauern. Überprüfen Sie die LEDs auf Ihrem Gateway, um den Status zu überwachen.",
                IT: "Il riavvio richiederà alcuni minuti, controlla i led sul gateway per seguire lo stato.",
                DA: "Genstart tager et par minutter, tjek din gateways LED'er for at følge status.",
                AR: "سوف تستغرق إعادة التشغيل بضعَ دقائق، انظر مصابيح الإشارة على جهاز البوابة لديك لمتابعة الحالة.",
                PT: "o reinicio tardara alguns minutos, verifique os leds para seguir o estado",
                RO: "TODO",
                IND: "TODO"
            },
            ledPageInfo: {
                EN: "The front LEDs indicate different functions of the device. It can be set in two modes: Dark mode – after 5 minutes of normal activity, the status LEDs will turn off and the power LED will turn blue. If any error occurs, or the WiFi/WPS button is pushed, LEDs will light up again. Always on – status LEDs will always indicate device status.",
                FR: "TODO",
                ES: "TODO",
                DE: "Die folgende Tabelle zeigt die Gerätedaten und den Status des Kabelrouters.",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "Informatiile de mai jos arata starea curenta a acestui router.",
                IND: "TODO"
            },
            lightControl: {
                EN: "LED Lights",
                FR: "Contrôle LEDs",
                ES: "Control de luz",
                DE: "Leuchtstärke",
                IT: "Controllo LED",
                DA: "Lysstyring",
                AR: "TODO",
                PT: "control de luz",
                RO: "Control LED-uri",
                IND: "TODO"
            },
            ledMode: {
                EN: "Dark Mode / Always ON",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            hubLight: {
                EN: "Dark Mode / Always ON",
                FR: "LEDs",
                ES: "LEDs",
                DE: "LEDs",
                IT: "LEDs",
                DA: "LED´er",
                AR: "TODO",
                PT: "LEDs",
                RO: "LED-uri",
                IND: "TODO"
            },
            cmSignal: {
                EN: "Downstream Signal",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            cableModemPageDescription2: {
                EN: "This page displays information on the status of the cable modem's HFC network connectivity.",
                FR: "TODO",
                ES: "TODO",
                DE: "Auf dieser Seite werden Informationen zum Status der Netzwerkkonnektivität des Kabelmodems im Kabelnetz angezeigt.",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO"
            },
            notbooked: {
                EN: "Not registered",
                FR: "TODO",
                ES: "TODO",
                DE: "Nicht gebucht",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "Nerezervat",
                IND: "TODO"
            },
            wan_blocking: {
                EN: "WAN Ping Blocking",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "WAN Ping blokering",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            enableWireless: {
                EN: "Enable SSID",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "Aktiver SSID",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO"
            },
            enableAutoIPv6Assignment: {
                EN: "Enable SLAAC",
                FR: "TODO",
                ES: "TODO",
                DE: "SLAAC aktivieren",
                IT: "TODO",
                DA: "Aktivér SLAAC",
                AR: "TODO",
                PT: "TODO",
                RO: "Activați SLAAC",
                IND: "TODO"
            },
            lanIpv4: {
                EN: "LAN & DHCP",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "LAN & DHCP",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wpsAlert: {
                EN: "In order to completely disable the WPS functionality you have to turn it off for every available radio frequency.",
                FR: "Si	la	connexion	Wi-Fi	Protected	Setup	est	désactivée	ici,	le	bouton	physique	de	votre	routeur	sera	également	désactivé.",
                ES: "Si	la	función	Wi-Fi	Protected	Setup	está	deshabilitada	aquí,	también	se	desactivará	el	botón	en	el	router.",
                DE: "Um die WPS-Funktion vollständig zu deaktivieren, müssen Sie sie für jede verfügbare Radiofrequenz deaktivieren.",
                IT: "Se	il	setup	Wi-Fi	protetto	è	disabilitato	qui,	anche	il	pulsante	fisico	sul	router	sarà	disabilitato.",
                DA: "Hvis	'Wi-Fi	beskyttet	opsætning'	(WPS)	er	deaktiveret	her,	vil	den	fysiske	knap	på	din	router	også	være	deaktiveret.",
                AR: "في	حال	تم	تعطيل	إعدادات	حماية	واي	فاي	هنا،	فإنه	سيتم	تعطيل	الزر	على	جهاز	الرواتر	لديك.	",
                PT: "Se	o	setup	protegido	de	Wi-Fi	estiver	desabilitado	aquí,	o	botao	fisico	do	seu	router	tambem	esta	desativado.",
                RO: "TODO",
                IND: "TODO",
                HU: "Annak érdekében, hogy a WPS-funkciók teljesen letilthatók legyenek, minden rendelkezésre álló rádiófrekvenciára ki kell kapcsolni."
            }
        },
        routes: function(a) {
            return {
                desktop: {
                    "public": [{
                        name: "public",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a["public"]
                            }
                        }
                    }, {
                        name: "public.404",
                        state: {
                            url: "/404/",
                            templateUrl: "404.html"
                        }
                    }, {
                        name: "public.blockedAccess",
                        state: {
                            url: "/blockedAccess/",
                            templateUrl: "views/blocked-access.html",
                            controller: "BlockedAccessController"
                        }
                    }],
                    anon: [{
                        name: "anon",
                        state: {
                            "abstract": !0,
                            template: "<ui-view/>",
                            data: {
                                access: a.anon
                            }
                        }
                    }, {
                        name: "anon.login",
                        state: {
                            url: "/login/:user",
                            templateUrl: this.simpleLogin ? "views/base.html" : "views/login-simple-comhem.html",
                            controller: "LoginController"
                        }
                    }, {
                        name: "anon.login.simple",
                        state: {
                            url: "/credentials",
                            templateUrl: "views/login-simple-comhem.html",
                            controller: "LoginController"
                        }
                    }, {
                        name: "anon.androidHelp",
                        state: {
                            url: "/androidHelp/",
                            templateUrl: "views/android-help.html",
                            controller: "LoginController"
                        }
                    }, {
                        name: "anon.mysagemcombox",
                        state: {
                            "abstract": !0,
                            url: "/mybox",
                            templateUrl: "views/base.html"
                        }
                    }, {
                        name: "anon.mysagemcombox.deviceInfo",
                        state: {
                            url: "/deviceInfo",
                            templateUrl: "views/mysagemcombox.simple-main.html"
                        }
                    }],
                    user: [{
                        name: "user",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.guest
                            }
                        }
                    }, {
                        name: "user.home",
                        state: {
                            url: "/",
                            templateUrl: this.mainPage || "views/main-comhem.html",
                            controller: "ConnectedDevicesController"
                        }
                    }, {
                        name: "user.mynetwork",
                        state: {
                            url: "/mynetwork",
                            templateUrl: "views/mynetwork.main.html"
                        }
                    }, {
                        name: "user.mynetwork.map",
                        state: {
                            url: "/networkMap",
                            templateUrl: "views/mynetwork.map.html",
                            controller: "MyNetworkController",
                            data: {
                                module: "networkMap"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox",
                        state: {
                            url: "/mybox",
                            templateUrl: "views/mysagemcombox.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo",
                        state: {
                            url: "/deviceInfo",
                            templateUrl: "views/mysagemcombox.device-info.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.dhcp",
                        state: {
                            url: "/DHCP",
                            templateUrl: "views/mysagemcombox.dhcp.html",
                            controller: "DhcpController",
                            data: {
                                module: "lanIpv4"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo.dhcpLeases",
                        state: {
                            url: "/dhcpLeases",
                            templateUrl: "views/mysagemcombox.device-info.dhcp-leases.html",
                            controller: "DhcpLeasesController",
                            data: {
                                module: "dhcpLeases"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo.statistics",
                        state: {
                            url: "/statistics",
                            templateUrl: "views/mysagemcombox.device-info.statistics.html",
                            controller: "StatisticsController",
                            data: {
                                module: "statistics"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo.arp",
                        state: {
                            url: "/arp",
                            templateUrl: "views/mysagemcombox.device-info.arp.html",
                            controller: "ARPController",
                            data: {
                                module: "arpTable"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo.deviceInfo",
                        state: {
                            url: "/deviceInfo",
                            templateUrl: "views/mysagemcombox.device-info.device-info.html",
                            controller: "DeviceInformationController"
                        }
                    }, {
                        name: "user.mysagemcombox.mass-storage",
                        state: {
                            url: "/mass-storage/",
                            templateUrl: "views/mysagemcombox.mass-storage.html",
                            controller: "MassStorageController"
                        }
                    }, {
                        name: "user.mysagemcombox.dns",
                        state: {
                            url: "/dns",
                            templateUrl: "views/mysagemcombox.dns.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.dns.server",
                        state: {
                            url: "/server",
                            templateUrl: "views/mysagemcombox.dns.server.html",
                            controller: "DnsServerController"
                        }
                    }, {
                        name: "user.mysagemcombox.ddns",
                        state: {
                            url: "/ddns",
                            templateUrl: "views/mysagemcombox.ddns.html",
                            controller: "DdnsController",
                            data: {
                                module: "dyndns"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance",
                        state: {
                            url: "/maintenance",
                            controller: "MaintenanceMainController",
                            templateUrl: this.simpleMaintenance ? "views/mysagemcombox.maintenance.mainSimple.html" : "views/mysagemcombox.maintenance.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.reset",
                        state: {
                            url: "/reset",
                            templateUrl: "views/mysagemcombox.maintenance.reset.html",
                            controller: "MaintenanceResetController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.firmwareUpdate",
                        state: {
                            url: "/firmware-update",
                            templateUrl: "views/mysagemcombox.maintenance.firmware-update.html",
                            controller: "MaintenanceResetController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.user",
                        state: {
                            url: "/user",
                            templateUrl: "views/access-control.user.html",
                            controller: "AccessControlUserController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log",
                        state: {
                            url: "/log",
                            templateUrl: "views/mysagemcombox.maintenance.log.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log.systemlog",
                        state: {
                            url: "/system-log",
                            templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                            controller: "MaintenanceSystemLogController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log.operatorlog",
                        state: {
                            url: "/operator-log",
                            templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                            controller: "MaintenanceSystemLogController",
                            data: {
                                type: "operator"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log.securitylog",
                        state: {
                            url: "/security-log",
                            templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                            controller: "MaintenanceSystemLogController",
                            data: {
                                type: "firewall"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log.upnplog",
                        state: {
                            url: "/upnp-log",
                            templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                            controller: "MaintenanceSystemLogController",
                            data: {
                                type: "upnp"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.internetUtilities",
                        state: {
                            url: "/internet-utilities",
                            templateUrl: "views/mysagemcombox.maintenance.internet-utilities.html",
                            controller: "MaintenanceInternetUtilitiesController",
                            data: {
                                module: "internetUtilities"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.filteredUtilities",
                        state: {
                            url: "/internet-utilities/:tool",
                            templateUrl: "views/mysagemcombox.maintenance.internet-utilities.html",
                            controller: "MaintenanceInternetUtilitiesController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.bkpRestore",
                        state: {
                            url: "/backup-restore",
                            templateUrl: "views/mysagemcombox.maintenance.bkpRestore.html",
                            controller: "MaintenanceResetController",
                            data: {
                                module: "bkpRestore"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.ntp",
                        state: {
                            url: "/ntp",
                            templateUrl: "views/mysagemcombox.maintenance.ntp.html",
                            controller: "NTPController",
                            data: {
                                module: "ntp"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.healthCheck",
                        state: {
                            url: "/healthCheck",
                            templateUrl: "views/mysagemcombox.maintenance.health-check.html",
                            controller: "MaintenanceHealthCheckController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.firstInstall",
                        state: {
                            url: "/firstInstall",
                            templateUrl: "views/mysagemcombox.maintenance.first-install.html"
                        }
                    }, {
                        name: "user.mysagemcombox.autodimming",
                        state: {
                            url: "/autodimming",
                            templateUrl: "views/mysagemcombox.autodimming.html",
                            controller: "AutoDimmingController"
                        }
                    }, {
                        name: "user.mysagemcombox.ecoMode",
                        state: {
                            url: "/ecoMode",
                            templateUrl: "views/mysagemcombox.eco-mode.html",
                            controller: "LEDController"
                        }
                    }, {
                        name: "user.mysagemcombox.led",
                        state: {
                            url: "/led",
                            templateUrl: "views/mysagemcombox.led.html",
                            controller: "LEDController"
                        }
                    }, {
                        name: "user.ethernet",
                        state: {
                            url: "/ethernet",
                            templateUrl: "views/ethernet.html",
                            controller: "EthernetController"
                        }
                    }, {
                        name: "user.wifi",
                        state: {
                            url: "/wifidual/:radio/:mode",
                            templateUrl: "views/wifi.main.dual.html",
                            controller: "WifiMainController",
                            data: {
                                title: "wifi"
                            }
                        }
                    }, {
                        name: "user.wifi.basic",
                        state: {
                            url: "/basic",
                            templateUrl: "views/wifi.basic.dual.generic.html",
                            controller: "WiFiBasicDualController",
                            data: {
                                title: "basic"
                            }
                        }
                    }, {
                        name: "user.wifi.bandsteering",
                        state: {
                            url: "/bandsteering",
                            templateUrl: "views/wifi.bandsteering.html",
                            controller: "WiFiBandSteeringController"
                        }
                    }, {
                        name: "user.wifi.mesh",
                        state: {
                            url: "/mesh-wifi",
                            templateUrl: "views/wifi.mesh.main.html",
                            data: {
                                module: "wifiMesh"
                            }
                        }
                    }, {
                        name: "user.wifi.mesh.overview",
                        state: {
                            url: "/overview",
                            templateUrl: "views/mysagemcombox.mesh.overview.html",
                            controller: "MeshOverviewController",
                            data: {
                                module: "wifiMesh"
                            }
                        }
                    }, {
                        name: "user.wifi.mesh.bandsteering",
                        state: {
                            url: "/bandsteering",
                            templateUrl: "views/wifi.mesh.html",
                            controller: "WiFiMeshController",
                            data: {
                                module: "wifiMesh"
                            }
                        }
                    }, {
                        name: "user.wifi.mesh.extenders",
                        state: {
                            url: "/pods",
                            templateUrl: "views/mysagemcombox.mesh.extenders.html",
                            controller: "MeshExtendersController",
                            data: {
                                module: "wifiMesh"
                            }
                        }
                    }, {
                        name: "user.wifi.mesh.devices",
                        state: {
                            url: "/devices",
                            templateUrl: "views/mysagemcombox.mesh.devices.html",
                            controller: "MeshDevicesController",
                            data: {
                                module: "wifiMesh"
                            }
                        }
                    }, {
                        name: "user.wifidual.wps",
                        state: {
                            url: "/wps",
                            templateUrl: "views/wifi.wps.html",
                            controller: "WiFiDualWpsController",
                            data: {
                                title: "wps"
                            }
                        }
                    }, {
                        name: "user.wifi.advanced",
                        state: {
                            url: "/advanced",
                            templateUrl: "views/wifi.advanced.html",
                            controller: "WiFiAdvancedController",
                            data: {
                                module: "wifiAdvanced"
                            }
                        }
                    }, {
                        name: "user.wifi.wps",
                        state: {
                            url: "/wps",
                            templateUrl: "views/wifi.wps.html",
                            controller: "WiFiDualWpsController",
                            data: {
                                module: "wifiWPS"
                            }
                        }
                    }, {
                        name: "user.wifi.stats",
                        state: {
                            url: "/stats",
                            templateUrl: "views/wifi.stats.html",
                            controller: "WiFiStatsController",
                            data: {
                                module: "wifiStats"
                            }
                        }
                    }, {
                        name: "user.wifi.mac-filter",
                        state: {
                            url: "/mac-filter",
                            templateUrl: "views/wifi.mac-filter.html",
                            controller: "WiFiMacFilterController",
                            data: {
                                module: "wifiMacFilter"
                            }
                        }
                    }, {
                        name: "user.schedule.basic",
                        state: {
                            url: "/scheduling",
                            templateUrl: "views/wifi.scheduling.html",
                            controller: "WifiSchedulingController"
                        }
                    }, {
                        name: "user.wifi.environment",
                        state: {
                            url: "/environment",
                            templateUrl: "views/wifi.environment.main.html"
                        }
                    }, {
                        name: "user.wifi.environment.scan",
                        state: {
                            url: "/scan",
                            templateUrl: "views/wifi.environment.scan.html",
                            controller: "WiFiEnvironmentController"
                        }
                    }, {
                        name: "user.wifi.environment.recommended",
                        state: {
                            url: "/recommended",
                            templateUrl: "views/wifi.environment.recommended.html",
                            controller: "WiFiChannelController"
                        }
                    }, {
                        name: "user.wifi.guest",
                        state: {
                            url: "/guest",
                            templateUrl: "views/wifi.guest.html"
                        }
                    }, {
                        name: "user.wifi.wds",
                        state: {
                            url: "/wds",
                            templateUrl: "views/wifi.wds.html"
                        }
                    }, {
                        name: "user.accessControl",
                        state: {
                            url: "/access-control",
                            templateUrl: "views/access-control.main.html"
                        }
                    }, {
                        name: "user.accessControlScheduling",
                        state: {
                            url: "/access-control/scheduling/:scheduleType/:mode",
                            templateUrl: "views/scheduling.main.html",
                            controller: "SchedulingMainController",
                            data: {
                                mainPage: "accessControl"
                            }
                        }
                    }, {
                        name: "user.accessControlScheduling.control",
                        state: {
                            url: "/control",
                            templateUrl: "views/scheduling.control.html",
                            controller: "SchedulingController",
                            data: {
                                title: "wifiScheduleTitle"
                            }
                        }
                    }, {
                        name: "user.accessControl.wifi",
                        state: {
                            url: "/wifi/:radio/:mode",
                            templateUrl: "views/access-control.main.wifi.html",
                            controller: "WifiMainController",
                            data: {
                                title: "wifi"
                            }
                        }
                    }, {
                        name: "user.accessControl.wifi.mac-filter",
                        state: {
                            url: "/mac-filter",
                            templateUrl: "views/wifi.mac-filter.html",
                            controller: "WiFiMacFilterController",
                            data: {
                                module: "wifiMacFilter"
                            }
                        }
                    }, {
                        name: "user.accessControl.dmz",
                        state: {
                            url: "/dmz",
                            templateUrl: "views/access-control.dmz.html",
                            controller: "DMZController"
                        }
                    }, {
                        name: "user.accessControl.dmzIPv6",
                        state: {
                            url: "/dmzIPv6",
                            templateUrl: "views/access-control.dmz-ipv6.html",
                            controller: "DmzIPv6Controller"
                        }
                    }, {
                        name: "user.accessControl.natMapping",
                        state: {
                            url: "/nat-mapping",
                            templateUrl: "views/access-control.nat-mapping.html",
                            controller: "NatMappingController"
                        }
                    }, {
                        name: "user.accessControl.firewall",
                        state: {
                            url: "/firewall",
                            templateUrl: "views/access-control.firewall.html",
                            controller: "FirewallController",
                            data: {
                                module: "firewall"
                            }
                        }
                    }, {
                        name: "user.accessControl.remoteaccess",
                        state: {
                            url: "/remote-access",
                            templateUrl: "views/access-control.remote-access.html",
                            controller: "RemoteManagementController",
                            data: {
                                module: "remoteAccess"
                            }
                        }
                    }, {
                        name: "user.accessControl.advancedOptions",
                        state: {
                            url: "/advanced",
                            templateUrl: "views/mysagemcombox.advanced.options.html",
                            controller: "AdvancedOptionsController"
                        }
                    }, {
                        name: "user.accessControl.user",
                        state: {
                            url: "/user",
                            templateUrl: "views/access-control.user.html",
                            controller: "AccessControlUserController"
                        }
                    }, {
                        name: "user.accessControl.upnp",
                        state: {
                            url: "/upnp",
                            templateUrl: "views/access-control.upnp.html",
                            controller: "UPnPController"
                        }
                    }, {
                        name: "user.accessControl.parentalControl",
                        state: {
                            url: "/parental-control",
                            templateUrl: "views/access-control.parental-control.main.html"
                        }
                    }, {
                        name: "user.accessControl.parentalControl.planning",
                        state: {
                            url: "/planning",
                            templateUrl: "views/access-control.parental-control.planning.html",
                            controller: "ParentalControllerPlanning"
                        }
                    }, {
                        name: "user.accessControl.parentalControl.filtering",
                        state: {
                            url: "/filtering",
                            templateUrl: "views/access-control.parental-control.filtering.html",
                            controller: "ParentalControllerFiltering"
                        }
                    }, {
                        name: "user.accessControl.parentalControl.control",
                        state: {
                            url: "/control",
                            templateUrl: "views/access-control.parental-control.profile.html",
                            controller: "ParentalControllerProfiles"
                        }
                    }, {
                        name: "user.accessControl.portForwarding",
                        state: {
                            url: "/port-forwarding",
                            templateUrl: "views/access-control.port-forwarding.main.html",
                            data: {
                                module: "portForwarding"
                            }
                        }
                    }, {
                        name: "user.accessControl.portForwarding.addRule",
                        state: {
                            url: "/add-rule",
                            templateUrl: "views/access-control.port-forwarding.html",
                            controller: "PortForwardingController"
                        }
                    }, {
                        name: "user.accessControl.portForwarding.gamesApp",
                        state: {
                            url: "/games-app",
                            templateUrl: "views/access-control.port-forwarding.games-app.html",
                            controller: "GamesController"
                        }
                    }, {
                        name: "user.accessControl.portTriggering",
                        state: {
                            url: "/port-triggering",
                            templateUrl: "views/access-control.port-triggering.html",
                            controller: "PortTriggeringController",
                            data: {
                                module: "portTriggering"
                            }
                        }
                    }, {
                        name: "user.ethernetDevice",
                        state: {
                            url: "/device/:layer/:uid",
                            templateUrl: "views/ethernet-device.main.html",
                            controller: "EthernetDeviceMainController"
                        }
                    }, {
                        name: "user.ethernetDevice.deviceInfo",
                        state: {
                            url: "/device-info",
                            templateUrl: "views/ethernet-device.device-info.html",
                            controller: "EthernetDeviceController"
                        }
                    }, {
                        name: "user.ethernetDevice.dmz",
                        state: {
                            url: "/dmz",
                            templateUrl: "views/ethernet-device.dmz.html",
                            controller: "DMZController",
                            data: {
                                module: "dmz"
                            }
                        }
                    }, {
                        name: "user.ethernetDevice.portForwarding",
                        state: {
                            url: "/port-forwarding",
                            templateUrl: "views/ethernet-device.port-forwarding.main.html",
                            controller: "EthernetDevicePFMainController"
                        }
                    }, {
                        name: "user.ethernetDevice.portForwarding.addRule",
                        state: {
                            url: "/add-rule",
                            templateUrl: "views/access-control.port-forwarding.html",
                            controller: "PortForwardingController"
                        }
                    }, {
                        name: "user.ethernetDevice.portForwarding.gamesApp",
                        state: {
                            url: "/games-app",
                            templateUrl: "views/access-control.port-forwarding.games-app.html",
                            controller: "GamesController"
                        }
                    }, {
                        name: "user.ethernetDevice.firewall",
                        state: {
                            url: "/firewall",
                            templateUrl: "views/access-control.firewall.html",
                            controller: "FirewallController"
                        }
                    }, {
                        name: "user.ethernetDevice.parentalControl",
                        state: {
                            url: "/parental-control",
                            templateUrl: "views/access-control.parental-control.planning.html",
                            controller: "ParentalControllerPlanning"
                        }
                    }, {
                        name: "user.usbDevice",
                        state: {
                            url: "/usb-devices/:uid",
                            templateUrl: "views/usb-device.main.html",
                            controller: "UsbDeviceMainController"
                        }
                    }, {
                        name: "user.usbDevice.deviceInfo",
                        state: {
                            url: "/usb-devices-info/",
                            templateUrl: "views/usb-device.device-info.html",
                            controller: "UsbDeviceController"
                        }
                    }, {
                        name: "user.usbDevice.massStorage",
                        state: {
                            url: "/mass-storage/",
                            templateUrl: "views/mysagemcombox.mass-storage.html",
                            controller: "MassStorageController"
                        }
                    }, {
                        name: "user.mysagemcombox.route",
                        state: {
                            url: "/route",
                            templateUrl: "views/mysagemcombox.route.main.html",
                            data: {
                                module: "route"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.route.static",
                        state: {
                            url: "/static",
                            templateUrl: "views/mysagemcombox.route.static.html",
                            controller: "RouteStaticController"
                        }
                    }, {
                        name: "user.mysagemcombox.mymedia",
                        state: {
                            url: "/myMedia",
                            templateUrl: "views/my.media.html",
                            controller: "MyMediaController"
                        }
                    }, {
                        name: "user.scheduling",
                        state: {
                            url: "/scheduling/:scheduleType/:mode",
                            templateUrl: "views/scheduling.main.html",
                            controller: "SchedulingMainController"
                        }
                    }, {
                        name: "user.scheduling.control",
                        state: {
                            url: "/control",
                            templateUrl: "views/scheduling.control.html",
                            controller: "SchedulingController",
                            data: {
                                title: "wifiScheduleTitle"
                            }
                        }
                    }, {
                        name: "user.phonebook",
                        state: {
                            url: "/phonebook",
                            templateUrl: "views/phonebook.main.html"
                        }
                    }, {
                        name: "user.phonebook.contacts",
                        state: {
                            url: "/contacts",
                            templateUrl: "views/phonebook.contacts.html",
                            controller: "PhonebookContactsController"
                        }
                    }, {
                        name: "user.phonebook.callLog",
                        state: {
                            url: "/callLog",
                            templateUrl: "views/phonebook.call-log.html",
                            controller: "VoiceDeviceController"
                        }
                    }, {
                        name: "user.internetConnectivity",
                        state: {
                            url: "/internetConnectivity",
                            templateUrl: "views/internet-connectivity.main.html"
                        }
                    }, {
                        name: "user.internetConnectivity.ppp",
                        state: {
                            url: "/ppp",
                            templateUrl: "views/internet-connectivity.ppp.html",
                            controller: "PPPController"
                        }
                    }, {
                        name: "user.internetConnectivity.wan",
                        state: {
                            url: "/wan",
                            templateUrl: "views/internet-connectivity.wan.html",
                            controller: "WANController",
                            data: {
                                module: "internetConnectivityWanAdvanced"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.trafficSpeed",
                        state: {
                            url: "/trafficSpeed",
                            templateUrl: "views/internet-connectivity.traffic-speed-new.html",
                            controller: "TrafficSpeedNewController",
                            data: {
                                module: "trafficSpeed"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.3g",
                        state: {
                            url: "/3g",
                            templateUrl: "views/internet-connectivity.3g.html",
                            controller: "Backup3gController"
                        }
                    }, {
                        name: "user.internetConnectivity.basic",
                        state: {
                            url: "/basic",
                            templateUrl: "views/internet-connectivity.basic.html",
                            data: {
                                module: "internetConnectivityWanBasic"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.basic.ipv4",
                        state: {
                            url: "/ipv4",
                            templateUrl: "views/internet-connectivity.ipv4.html",
                            controller: "SimpleController",
                            data: {
                                module: "internetConnectivityWanBasic"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.ipv6",
                        state: {
                            url: "/ipv6",
                            templateUrl: "views/internet-connectivity.ipv6.html"
                        }
                    }, {
                        name: "user.internetConnectivity.docsis",
                        state: {
                            url: "/docsis",
                            "abstract": !0,
                            templateUrl: "views/internet-connectivity.docsis.main.html",
                            data: {
                                module: "docsis"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.docsis.configuration",
                        state: {
                            url: "/configuration",
                            controller: "MaintenanceResetController",
                            templateUrl: "views/mysagemcombox.device-info.configuration.html",
                            data: {
                                module: "docsis"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.docsis.networkparams",
                        state: {
                            url: "/network-parameters",
                            templateUrl: "views/mysagemcombox.device-info.docsis.html",
                            controller: "DeviceInformationController",
                            data: {
                                module: "docsis",
                                netparams: !0
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.docsis.rfparams",
                        state: {
                            url: "/rf-parameters",
                            templateUrl: "views/mysagemcombox.device-info.docsis.connection.html",
                            controller: "CableModemConnectionController",
                            data: {
                                module: "docsis"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.docsis.mta",
                        state: {
                            url: "/mta",
                            templateUrl: "views/sip-settings.settings.html",
                            controller: "SipSettingsController",
                            data: {
                                module: "docsis"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.basic.simpleIpv6",
                        state: {
                            url: "/simpleIpv6",
                            templateUrl: "views/internet-connectivity.ipv6Simple.html",
                            controller: "SimpleIPv6Controller",
                            data: {
                                module: "simpleIpv6"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.simpleIpv6",
                        state: {
                            url: "/simpleIPv6",
                            templateUrl: "views/internet-connectivity.ipv6Simple.html",
                            controller: "SimpleIPv6Controller",
                            data: {
                                module: "simpleIPv6Main"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.bridgemodeInternetPage",
                        state: {
                            url: "/bridgemode",
                            templateUrl: "views/mysagemcombox.bridge-mode.html",
                            controller: "BridgeModeController",
                            data: {
                                module: "bridgemodeInternetPage"
                            }
                        }
                    }, {
                        name: "user.sip",
                        state: {
                            url: "/sip-settings",
                            templateUrl: "views/sip-settings.main.html",
                            data: {
                                module: "sip"
                            }
                        }
                    }, {
                        name: "user.sip.telephones",
                        state: {
                            url: "/telephones-matrix",
                            templateUrl: "views/sip-telephones.matrix.html",
                            controller: "TelephonesMatrixController"
                        }
                    }, {
                        name: "user.sip.callsettings",
                        state: {
                            url: "/call-settings",
                            templateUrl: "views/sip-settings.call-settings.html",
                            controller: "CallBlockingController"
                        }
                    }, {
                        name: "user.sip.settings",
                        state: {
                            url: "/settings",
                            templateUrl: "views/sip-settings.settings.html",
                            controller: "SipSettingsController"
                        }
                    }, {
                        name: "user.dect",
                        state: {
                            url: "/dect",
                            templateUrl: "views/dect.main.html"
                        }
                    }, {
                        name: "user.dect.basic",
                        state: {
                            url: "/basic",
                            templateUrl: "views/dect.basic.html",
                            controller: "DectBasicController"
                        }
                    }, {
                        name: "user.dect.advanced",
                        state: {
                            url: "/advanced",
                            templateUrl: "views/dect.advanced.html",
                            controller: "DectAdvancedController",
                            data: {
                                module: "dectAdvanced"
                            }
                        }
                    }, {
                        name: "user.dectHandset",
                        state: {
                            url: "/dectHandset/:uid",
                            templateUrl: "views/dect.handset.main.html",
                            controller: "DectHandsetMainController"
                        }
                    }, {
                        name: "user.dectHandset.handset",
                        state: {
                            url: "/handset",
                            templateUrl: "views/dect.handset.handset.html",
                            controller: "DectHandsetController"
                        }
                    }, {
                        name: "user.dectHandset.advanced",
                        state: {
                            url: "/advanced",
                            templateUrl: "views/dect.handset.advanced.html",
                            controller: "DectHandsetController"
                        }
                    }],
                    admin: [{
                        name: "admin",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.admin
                            }
                        }
                    }],
                    onu: [{
                        name: "onu",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.admin
                            }
                        }
                    }],
                    internal: [{
                        name: "internal",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.internal
                            }
                        }
                    }],
                    poweruser: [{
                        name: "poweruser",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.internal
                            }
                        }
                    }],
                    mso: [{
                        name: "mso",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.mso
                            }
                        }
                    }]
                }
            }
        },
        replaceXpaths: {
            adminAdvanced: {
                vcivpi: "",
                dns1Static: "Device/Managers/NetworkData/DNS/WAN/IPv4/DNS1",
                dns2Static: "Device/Managers/NetworkData/DNS/WAN/IPv4/DNS2",
                internetConnectivity: {
                    ipv6: {
                        enable: "Device/IP/IPv6Enable"
                    }
                }
            },
            forbiddenIps: {
                ips: {
                    upnpHost: "",
                    quantennaBootIpLocal: "",
                    quantennaBootIPRemote: "",
                    quantennaMngtIPLocal: "",
                    quantennaMngtIPRemote: ""
                }
            },
            main: {
                cacheable: {
                    quantenna: {
                        BootIPLocal: "",
                        BootIPRemote: "",
                        InterfacePhy: "",
                        MngtIPRemote: ""
                    }
                }
            },
            ethernet: {
                port1: {
                    connectionSpeed: "Device/Ethernet/Interfaces/Interface[@uid='1']/CurrentBitRate",
                    duplexMode: "Device/Ethernet/Interfaces/Interface[@uid='1']/DuplexMode",
                    currentBitRate: "Device/Ethernet/Interfaces/Interface[@uid='1']/CurrentBitRate"
                },
                port2: {
                    connectionSpeed: "Device/Ethernet/Interfaces/Interface[@uid='2']/CurrentBitRate",
                    duplexMode: "Device/Ethernet/Interfaces/Interface[@uid='2']/DuplexMode",
                    currentBitRate: "Device/Ethernet/Interfaces/Interface[@uid='2']/CurrentBitRate"
                },
                port3: {
                    connectionSpeed: "Device/Ethernet/Interfaces/Interface[@uid='3']/CurrentBitRate",
                    duplexMode: "Device/Ethernet/Interfaces/Interface[@uid='3']/DuplexMode",
                    currentBitRate: "Device/Ethernet/Interfaces/Interface[@uid='3']/CurrentBitRate"
                },
                port4: {
                    connectionSpeed: "Device/Ethernet/Interfaces/Interface[@uid='4']/CurrentBitRate",
                    duplexMode: "Device/Ethernet/Interfaces/Interface[@uid='4']/DuplexMode",
                    currentBitRate: "Device/Ethernet/Interfaces/Interface[@uid='4']/CurrentBitRate"
                }
            },
            mySagemcomBox: {
                dns: {
                    server: "Device/Managers/NetworkData/DNS/LAN/IPv4/DNS1",
                    server2: "Device/Managers/NetworkData/DNS/LAN/IPv4/DNS2",
                    dynamic: "Device/DHCPv4/Server/Pools/Pool[Alias='DEFAULT_POOL']/DNSServers"
                },
                deviceInfo: {
                    publicIpv4: 'Device/IP/Interfaces/Interface[Alias="IP_DATA"]/IPv4Addresses/IPv4Address[Alias="IP_DATA_ADDRESS"]/IPAddress',
                    defaultGateway: 'Device/IP/Interfaces/Interface[Alias="IP_DATA"]/IPv4Addresses/IPv4Address/IPGateway',
                    publicSubnetMask: 'Device/IP/Interfaces/Interface[Alias="IP_DATA"]/IPv4Addresses/IPv4Address[Alias="IP_DATA_ADDRESS"]/SubnetMask',
                    localEthernetMac: 'Device/Ethernet/Links/Link[Alias="ETHLNK_BR_LAN"]/MACAddress',
                    wanMacAddress: 'Device/Docsis/Interfaces/Interface[Alias="EROUTER"]/MACAddress',
                    globalLinkIpv6: "Device/Managers/IPv6/WANAddress",
                    defaultLinkIpv6: "Device/Managers/IPv6/DefaultGateway",
                    mobileMode: "",
                    mobileStatus: "",
                    operator: "",
                    imei: "",
                    datapumpVersion: "",
                    xdsl: {
                        linkEncapsulation: "",
                        connectionTimeDsl: "",
                        profile: "",
                        lineEncoding: "",
                        linkStatus: "",
                        standard: "",
                        status: "",
                        numeric: {
                            actualRateDown: "",
                            actualRateUp: "",
                            inp: "",
                            inpus: "",
                            interLeaveDelay: "",
                            interLeaveDelayus: "",
                            interLeaveDepth: "",
                            interLeaveDepthus: "",
                            dataPath: "",
                            dataPathus: "",
                            attenuationDown: "",
                            attenuationDownPerBand: "",
                            maximumRateDown: "",
                            noiseMarginDown: "",
                            powerDown: "",
                            lossOfSignal: "",
                            lossOfSignalus: "",
                            attenuationUp: "",
                            attenuationUpPerBand: "",
                            maximumRateUp: "",
                            noiseMarginUp: "",
                            powerUp: ""
                        }
                    },
                    xdsl2: {
                        linkEncapsulation: "",
                        connectionTimeDsl: "",
                        datapumpVersion: "",
                        lineEncoding: "",
                        profile: "",
                        linkStatus: "",
                        standard: "",
                        status: "",
                        numeric: {
                            actualRateDown: "",
                            actualRateUp: "",
                            inp: "",
                            inpus: "",
                            interLeaveDelay: "",
                            interLeaveDelayus: "",
                            interLeaveDepth: "",
                            interLeaveDepthus: "",
                            dataPath: "",
                            dataPathus: "",
                            attenuationDown: "",
                            attenuationDownPerBand: "",
                            maximumRateDown: "",
                            noiseMarginDown: "",
                            powerDown: "",
                            lossOfSignal: "",
                            lossOfSignalus: "",
                            attenuationUp: "",
                            attenuationUpPerBand: "",
                            maximumRateUp: "",
                            noiseMarginUp: "",
                            powerUp: ""
                        }
                    }
                },
                advancedOptions: {
                    wanBlockingEnable: "Device/Firewall/RespondToPing"
                },
                lanIPv6: {
                    enableAutoIPv6Assignment: 'Device/RouterAdvertisement/InterfaceSettings/InterfaceSetting[Alias="RA_BR_LAN"]/AdvManagedFlag',
                    enableAutoIPv6Assignment1: 'Device/RouterAdvertisement/InterfaceSettings/InterfaceSetting[Alias="RA_BR_LAN"]/AdvOtherConfigFlag'
                },
                networkConfiguration: {
                    atmLinks: ""
                },
                dhcp: {
                    guestDnsServer: "Device/Managers/NetworkData/DNS/LAN/IPv4/DNS1",
                    dnsServer: "Device/Managers/NetworkData/DNS/LAN/IPv4/DNS1"
                }
            },
            internetConnectivity: {
                ipv6: {
                    delegatedprefix: 'Device/IP/Interfaces/Interface[Alias="IP_DATA"]/IPv6Prefixes/IPv6Prefix[Alias="IAPD_2"]/Prefix',
                    wanIPv6: "Device/Managers/IPv6/WANAddress",
                    dns1Static: "Device/Managers/NetworkData/DNS/WAN/IPv6/DNS1",
                    dns2Static: "Device/Managers/NetworkData/DNS/WAN/IPv6/DNS2"
                },
                wan: {
                    atm: {
                        availableATMLinks: ""
                    },
                    dslWanInterfaces: {
                        standardUsed: ""
                    }
                },
                qos: {
                    interfaces: {
                        atmLinks: ""
                    }
                },
                backup3g: {
                    cellular: {
                        statusInfo: {
                            mobileOperator: ""
                        }
                    }
                }
            },
            stats: {
                atm: "",
                wan: {
                    dslStatus: ""
                },
                xdsl: {
                    dslDownstream: "",
                    dslUpstream: "",
                    linkEncapsulation: "",
                    connectionTimeDsl: "",
                    lineEncoding: "",
                    linkStatus: "",
                    standard: "",
                    status: "",
                    erroredSeconds: "",
                    reSynchronisations: "",
                    severelyErroredSecs: "",
                    numeric: {
                        lossOfFraming: "",
                        actualRateDown: "",
                        XTUCCRCErrors: "",
                        XTUCFECErrors: "",
                        XTURCRCErrors: "",
                        XTURFECErrors: "",
                        actualRateUp: "",
                        actualRateDown2: "",
                        actualRateUp2: "",
                        bytesReceived: "",
                        bytesSent: "",
                        packetsReceived: "",
                        packetsSent: ""
                    }
                }
            },
            management: {
                mobileLinks: {
                    apple: "",
                    google: ""
                }
            },
            rpc: {
                firmwareUpgrade: "Device/gen3890v3"
            },
            wifiMesh: {
                enable: "Device/WiFi/BandSteering/Enable"
            }
        }
    }
};
"undefined" != typeof module && module.exports ? exports.profile = profile : $.configs = $.extend($.configs, profile);
var profile = {
    unbranded: {
        expertMode: !1,
        cssTheme: "styles/themes/unbranded-theme.css",
        cssLogin: "styles/login-unbranded.css",
        mainTheme: "styles/themes/comhem-main.css",
        title: "WiFi Hub C2",
        headerModel: "",
        partnerUrl: "https://comhem.se",
        allowedLanguages: {
            "default": ["EN"]
        },
        ipv6Certified: !1,
        languageDropDownList: !1,
        blockedSecurityModes: [],
        allowedUsers: null,
        blockedUsers: ["guest"],
        favicon: "images/faviconNone.ico",
        simpleLogin: !0,
        staticUserLogin: !1,
        simpleMaintenance: !1,
        extendedMenus: !1,
        hideTable: {
            enabled: !0,
            checkFeatureEnabled: !0,
            buildModeEnabled: !0,
            buildModeCheckFeatureEnabled: !0,
            buildModeDisabledURLs: []
        },
        hasExternalHelp: !0,
        connectionTypeIPv4Options: [{
            name: "IP",
            value: "DHCP"
        }, {
            name: "PPP",
            value: "PPP"
        }],
        suggestChangeDefaultPassword: !1,
        internetProducts: [{
            type: "FTTH",
            label: "Fiber"
        }],
        noDslImage: "FTTH_noDSL",
        showInactiveDevices: !1,
        showAllPlcDevices: !1,
        reverseHeaderControls: !1,
        onChangeSave: !1,
        wanBlockingEnable: !0,
        changeDSLToFast: !1,
        ipv6SimpleReadOnly: !0,
        defaultUserLogin: "admin",
        bridgedBlockedFeatures: [{
            state: "user.mysagemcombox.dhcp",
            feature: "lanIpv4"
        }, {
            state: "user.mysagemcombox.lanIpv6",
            feature: "lanIpv6"
        }, {
            state: "user.mysagemcombox.ddns",
            feature: "dyndns"
        }, {
            state: "user.mysagemcombox.maintenance.ntp",
            feature: "ntp"
        }, {
            state: "user.accessControl.parentalControl",
            feature: "parentalControl"
        }, {
            state: "user.accessControl.portForwarding",
            feature: "portForwarding"
        }, {
            state: "user.accessControl.portTriggering",
            feature: "portTriggering"
        }, {
            state: "user.accessControl.firewall",
            feature: "firewall"
        }, {
            state: "user.accessControl.dmz",
            feature: "dmz"
        }, {
            state: "user.internetConnectivity.basic.ipv4",
            feature: "simpleIpv4"
        }, {
            state: "user.ethernetDevice.parentalControl",
            feature: "parentalControlDevice"
        }, {
            state: "user.ethernetDevice.portForwarding",
            feature: "portForwardingDevice"
        }, {
            state: "user.ethernetDevice.dmz",
            feature: "dmzDevice"
        }, {
            feature: "networkMapNewRule"
        }, {
            state: "user.mysagemcombox.deviceInfo.arp",
            feature: "arpTable"
        }, {
            feature: "nowifi"
        }],
        dynamicRoute: {
            wifi: [{
                feature: "wifiBasic",
                state: "user.wifi.basic",
                url: "/wifidual/:radio/:mode/basic"
            }, {
                feature: "wifiWPS",
                state: "user.wifi.wps",
                url: "/wifidual/:radio/:mode/wps"
            }, {
                feature: "wifiStats",
                state: "user.wifi.stats",
                url: "/wifidual/:radio/:mode/stats"
            }, {
                feature: "wifiAdvanced",
                state: "user.wifi.advanced",
                url: "/wifidual/:radio/:mode/advanced"
            }],
            accessControl: [{
                feature: "parentalControl",
                state: "user.accessControl.parentalControl",
                url: "/access-control/parental-control"
            }, {
                feature: "portForwarding",
                state: "user.accessControl.portForwarding",
                url: "/access-control/port-forwarding"
            }, {
                feature: "portTriggering",
                state: "user.accessControl.portTriggering",
                url: "/access-control/port-triggering"
            }, {
                feature: "firewall",
                state: "user.accessControl.firewall",
                url: "/access-control/firewall"
            }, {
                feature: "wifiMacFilter",
                state: "user.accessControl.wifi.mac-filter",
                url: "/access-control/wifi/wifiBothBands/priv/mac-filter"
            }, {
                feature: "dmz",
                state: "user.accessControl.dmz",
                url: "/access-control/dmz"
            }],
            internetConnectivity: [{
                feature: "simpleIpv4",
                state: "user.internetConnectivity.basic.ipv4",
                url: "/internetConnectivity/basic/ipv4"
            }, {
                feature: "simpleIpv6",
                state: "user.internetConnectivity.basic.simpleIpv6",
                url: "/internetConnectivity/basic/simpleIpv6"
            }, {
                feature: "docsis",
                state: "user.internetConnectivity.docsis",
                url: "/internetConnectivity/docsis"
            }, {
                feature: "bridgemode",
                state: "user.internetConnectivity.bridgemode",
                url: "/internetConnectivity/bridgemode"
            }],
            log: [{
                feature: "log",
                state: "user.mysagemcombox.maintenance.log.operatorlog",
                url: "/mybox/maintenance/log/operator-log"
            }]
        },
        modules: {
            staticDNS: !1,
            dyndns: {
                showIpv4Address: !1
            },
            dropboxRestrictMode: !1,
            simpleUserPage: !0,
            textPassword: !1,
            speedTestGauge: !0,
            main: {
                xpathForProductName: "Device/DeviceInfo/ModelName",
                showAllDevices: !1,
                showIpv6Address: !1
            },
            phonebook: {
                allowDuplicatedNumber: !0
            },
            internetConnectivity: {
                editStaticIp: !1,
                editIPv4Simple: !1,
                editIPv6Simple: !0,
                showAddressingType: !1,
                linkGoHome: !1,
                newDelegatedPrefix: !0,
                addressingTypePPP: !0,
                showStaticFields: !0,
                DNSManager: !1,
                defaultRoute: !0,
                interfaceTypeAll: !1,
                disabledOnADSL: !1,
                disabledOnVDSL: !1,
                editIpv6: !1,
                changeIpv4AliasBridgeMode: !0
            },
            useNewDHCPXpath: !1,
            hasMenuVertical: !1,
            myBox: {
                deviceInfo: {
                    modelName: !1,
                    maxLines: 1,
                    globalIpv6IgnoreOrigin: !0,
                    globalIpv6CheckAlias: !0,
                    globalIpv6Wan: "managers"
                },
                deviceTypes: [{
                    type: "MISCELLANEOUS",
                    icon: "miscellaneous"
                }, {
                    type: "COMPUTER",
                    icon: "pc",
                    iconsvg: "images/sprite.svg?new#icon-desktop"
                }, {
                    type: "PHONE",
                    icon: "smartphone"
                }, {
                    type: "NETWORKACCESSPOINT",
                    icon: "nap"
                }, {
                    type: "AUDIOVIDEO",
                    icon: "audiovideo"
                }, {
                    type: "PERIPHERAL",
                    icon: "peripheral"
                }, {
                    type: "IMAGING",
                    icon: "imaging"
                }, {
                    type: "NOTEBOOKS",
                    icon: "notebook"
                }, {
                    type: "GAMECONSOLE",
                    icon: "game"
                }, {
                    type: "STORAGE",
                    icon: "usb"
                }, {
                    type: "BLACKLISTED",
                    icon: "blacklisted"
                }, {
                    type: "HIDDEN",
                    icon: "hidden"
                }, {
                    type: "PRINTER",
                    icon: "printer"
                }, {
                    type: "TABLET",
                    icon: "tablet",
                    iconsvg: "images/comhem/sprite.svg?new#icon-tablet"
                }, {
                    type: "MOBILE_PHONE",
                    icon: "smartphone",
                    iconsvg: "images/comhem/sprite.svg?new#icon-mobile"
                }, {
                    type: "TV_DECODER",
                    icon: "tv"
                }, {
                    type: "WIFI_BRIDGE",
                    icon: "wifibridge"
                }, {
                    type: "WIFI_REPEATER",
                    icon: "wifirepeater"
                }, {
                    type: "PLC",
                    icon: "plc"
                }, {
                    type: "FEMTO",
                    icon: "femto"
                }, {
                    type: "NETWORK_STORAGE",
                    icon: "network-storage"
                }],
                dhcp: {
                    defaultValues: {
                        dhcpEnable: !0,
                        gatewayIp: "192.168.0.1",
                        subnetMask: "255.255.255.0",
                        ipv4PoolStart: "192.168.0.2",
                        ipv4PoolEnd: "192.168.0.254",
                        ipv4Lease: 3600,
                        ipv4TvPoolEnable: !1,
                        ipv4TvPoolStart: "",
                        ipv4TvPoolEnd: ""
                    },
                    updateDNS: !0,
                    updateGuestDNS: !1,
                    ipv4DefaultGwInput: "input",
                    predefinedIpRange: null,
                    ipv4LeaseInput: "select",
                    hostNameUpdate: !1
                },
                statistics: {
                    accordion: !0,
                    ethernetBitrate: "AUTO"
                },
                maintenance: {
                    horizontalTabs: !1,
                    editNTP: !0
                },
                dns: {
                    editDNS: !0
                }
            },
            scheduling: {
                "2.4GHz": {
                    title: "wifiScheduleTitle",
                    enableLabel: "enable",
                    scheduleEnableTip: "wifiScheduleEnableTip",
                    scheduleTableTip: "wifiScheduleTableTip"
                },
                "5GHz": {
                    title: "wifiScheduleTitle",
                    enableLabel: "enable",
                    scheduleEnableTip: "wifiScheduleEnableTip",
                    scheduleTableTip: "wifiScheduleTableTip"
                },
                wifiBothBands: {
                    title: "wifiScheduleTitle",
                    enableLabel: "enable",
                    scheduleEnableTip: "wifiScheduleEnableTip",
                    scheduleTableTip: "wifiScheduleTableTip"
                }
            },
            cableModem: {
                connection: {
                    round: {
                        enable: !0,
                        precisions: {
                            powerlevel: 1,
                            snr: 1
                        }
                    }
                }
            },
            wifi: {
                dual: !0,
                macfilterDual: !0,
                schedulingDual: !0,
                removeBandTitle: !0,
                wirelessEnvironmentCount: !1,
                wifi5MasterRadio: !1,
                wifiBandSteeringSupport: !0,
                wifiSchedulingEnabled: !0,
                wifiBandSteeringHidentStatusNotPresent: !0,
                alwaysShowCurrentChannel: !0,
                bandSteeringSplitWithSameName: !0,
                bandSteeringByMDW: !0,
                availableChannels: {
                    "2.4GHz": "1,6,11"
                },
                wifiSSIDInclusive: !1,
                wifiForbiddenChars: /^[!#;\s]|[`"|$?\\+[(;ßº§äöü]|[\s]$/,
                vmmHidenWifiModeACandN: !1,
                wps: {
                    configMethodXpath: "configMethodsEnabled",
                    overrideMethods: ""
                },
                oneRequestOnly: !1,
                oneRequestOnlyPriv: !0,
                oneRequestOnlyForWPS: !1,
                ssidKeyRules: /^[^\s][\x20-\x7E]*[^\s]$/,
                wirelessKeyRules: {
                    WPA2: /^[\x21-\x7E][\x20-\x7E]{6,61}[\x21-\x7E]$/,
                    WPA_PERSONAL: /^[\x21-\x7E][\x20-\x7E]{6,61}[\x21-\x7E]$/,
                    WPA_ENTERPRISE: /^[\x21-\x7E][\x20-\x7E]{6,61}[\x21-\x7E]$/,
                    WEP_64: /^[\x21-\x7E][\x20-\x7E]{8}[\x21-\x7E]$|^[\x21-\x7E][\x20-\x7E]{3}[\x21-\x7E]$/,
                    WEP_128: /^[\x21-\x7E][\x20-\x7E]{24}[\x21-\x7E]$|^[\x21-\x7E][\x20-\x7E]{11}[\x21-\x7E]$/
                },
                radioOnly: !1,
                wifiAliases: {},
                blockedSecurityModesByStandards: {},
                wifi24: {},
                wifi5: {}
            },
            accessControl: {
                parentalControlService: "ParentalControlNew",
                customSequenceWeekDayNew: {
                    1: 1e6,
                    2: 1e5,
                    3: 1e4,
                    4: 1e3,
                    5: 100,
                    6: 10,
                    7: 1
                },
                remoteAccess: {
                    blockedModes: ["ssh", "telnet"]
                },
                advancedOptions: {
                    removeConfigAdmin: !0
                },
                firewall: {
                    editFirewall: !0
                },
                user: {
                    editHierarchy: {}
                },
                gatewayTime: !1,
                removeUPNPRules: !1,
                bitmaskConfig: !1,
                portTriggeringSaveEnableWithoutApply: !0
            },
            SIPsettings: {
                singlePhoneLine: !0,
                profileDefaultValues: {
                    enable: !0,
                    localSelection: "DK",
                    voipDialpan: "(*x#|*xx#|*33*xxxxx#|*74*xxx.T|*75*xxx.T|*xx*xxxxx.#|*#xx#|#xx#|#33*xxxx#|00xxxxx.T|10xx11x|10xxxxxxx.T|116xxx|11xT|18xx|1[6-9]x.T|[2-9]xxxxxxx)",
                    sipProxyAddress: "",
                    sipProxyPort: 5060,
                    sipOutboundAddress: "",
                    sipOutboundInternalAddress: "",
                    sipOutboundPort: 5060,
                    sipUserAgentAddress: "",
                    sipUserAgentPort: 5060,
                    sipRegisterAddress: "",
                    sipRegisterPort: 5060,
                    enableT38: !1,
                    registrationExpireTimeout: 1800,
                    registrationRetryInterval: 240,
                    dscpSIP: "",
                    dscpRTP: "",
                    dtmfRelay: "",
                    hookFlashRelay: "",
                    sipTrasportProtocol: "",
                    cidSignalProtocol: "",
                    enableSipTagMatching: "",
                    musicServer: "",
                    musicServerPort: ""
                }
            },
            fon: {
                SSIDProfiles: []
            },
            reinitializeWithFactory: !0,
            showConnectionFrequency: !0,
            portForwarding: {
                rulesNotEditable: ["UPNP", "HIDDEN"],
                rulesNotRemovable: ["UPNP", "HIDDEN"],
                rulesNotDisplayed: []
            },
            firewall: {
                rulesNotDisplayed: []
            },
            tvBox: {
                name: ""
            },
            staticTZ: [{
                label: "Singapore GMT-8",
                value: "SGT-8"
            }, {
                label: "Central Indonesia GMT-8",
                value: "AST-8"
            }, {
                label: "Eastern Indonesian GMT-9",
                value: "SGT-9"
            }, {
                label: "Western Indonesian GMT-7",
                value: "SGT-7"
            }, {
                label: "New Zealand Daylight GMT-13",
                value: "SGT-13"
            }, {
                label: "New Zealand Standard GMT-12",
                value: "SGT-12"
            }, {
                label: "Australian Central Daylight Savings GMT-10:30",
                value: "CST-10:30"
            }, {
                label: "Australian Central Standard GMT-9:30",
                value: "CST-9:30"
            }, {
                label: "Australian Eastern Daylight Savings GMT-11",
                value: "SGT-11"
            }, {
                label: "Australian Eastern Standard GMT-10",
                value: "AEST-10AEDT,M10.5.0,M3.5.0/3"
            }, {
                label: "Australian Western Standard GMT-8",
                value: "JST-9"
            }, {
                label: "Central Standard Time (Australia) GMT-9:30",
                value: "AST-9:30"
            }, {
                label: "Central Summer Time (Australia) GMT-10:30",
                value: "AST-10:30"
            }, {
                label: "Central Western Standard Time (Australia) GMT-8:45",
                value: "CST-8:45"
            }, {
                label: "Eastern Summer Time (Australia) GMT-11",
                value: "AST-11"
            }, {
                label: "Eastern Standard Time (Australia) GMT-10",
                value: "AST-10"
            }]
        },
        hideWanLayerForNonInternal: !0,
        hideLanIPv6Options: !1,
        userPermissionsChanges: {
            admin: {
                remoteAccess: {
                    enable: !0
                },
                wifiMacFilter: {
                    enable: !0
                },
                statistics: {
                    enable: !0
                },
                statisticsLan: {
                    enable: !0
                },
                statisticsWanLayer3: {
                    enable: !0
                },
                statisticsWanLayer2: {
                    enable: !0
                },
                statisticsWanLayer1: {
                    enable: !0
                },
                dhcpLeases: {
                    enable: !0
                },
                dhcpLeasesInDHCP: {
                    enable: !1
                },
                dhcpIPv6InDHCP: {
                    enable: !0
                },
                arpTable: {
                    enable: !0
                },
                lanIpv4: {
                    enable: !0
                },
                lanIpv6: {
                    enable: !0
                },
                lanIpv6Router: {
                    enable: !1
                },
                lanDhcpv6: {
                    enable: !1
                },
                portForwarding: {
                    enable: !0
                },
                portForwardingDevice: {
                    enable: !1
                },
                portForwardingUpnpReadOnly: {
                    enable: !0
                },
                dmz: {
                    enable: !0
                },
                dmzDevice: {
                    enable: !1
                },
                docsis: {
                    enable: !0
                },
                macFilterDualTabs: {
                    enable: !1
                }
            }
        },
        featureAccess: {
            internal: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1
            },
            acs: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1
            },
            sagemcom: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1
            },
            admin: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1
            },
            expert: {
                trafficSpeed: !0,
                trafficSpeedGauge: !0
            }
        },
        roleFeature: {
            ENDUSER: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1,
                firmwareUpgrade: !1
            },
            SUPPORT: {
                trafficSpeed: !0,
                trafficSpeedGauge: !0,
                firmwareUpgrade: !0
            },
            INTERNAL: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1,
                firmwareUpgrade: !0
            },
            ANONYMOUS: {
                trafficSpeed: !1,
                trafficSpeedGauge: !1,
                firmwareUpgrade: !1
            }
        },
        showedpages: {
            wifiMacFilterTabs: {
                enable: !1
            },
            guiAccessRights: {
                enable: !1
            },
            wifiRestoreDefault: {
                enable: !1
            },
            showThrottleStateWarning: {
                enable: !1
            },
            bootloaderVersion: {
                enable: !1
            },
            IPv4DHCPImmutable: {
                enable: !1
            },
            fiberModal: {
                enable: !0
            },
            jtx: {
                enable: !1
            },
            docsisNetworkparamsModemBasicInfo: {
                enable: !0
            },
            docsisRfParamsHideFrequency: {
                enable: !0
            },
            ipv4ConnectionStatus: {
                enable: !1
            },
            lanIpv6AddressAutoconfiguration: {
                enable: !1
            },
            tabGeneral: {
                enable: !0
            },
            DnsFromOnlyOneWay: {
                enable: !0
            },
            FirewallButtons: {
                enable: !1
            },
            cableVoiceSettingsAdvanced: {
                enable: !1
            },
            cableEthernetWan: {
                enable: !1
            },
            charter5280: {
                enable: !1
            },
            quickSetupWizard: {
                enable: !1
            },
            duplexMode: {
                enable: !0
            },
            currentBitRate: {
                enable: !1
            },
            comhem: {
                enable: !0
            },
            driverVersion: {
                enable: !1
            },
            firstInstall: {
                enable: !1
            },
            deviceInfoWANxdslSection: {
                enable: !1
            },
            internetUtilitiesTR69: {
                enable: !1
            },
            landPage: {
                enable: !1
            },
            landPageCheck: {
                enable: !1
            },
            landPageCheckCellcom: {
                enable: !1
            },
            plmnBackup3g: {
                enable: !1
            },
            headerConnectionInfos: {
                enable: !1
            },
            cellidentityBackup3g: {
                enable: !1
            },
            firstInstallMaintenance: {
                enable: !1
            },
            firstInstallWizard: {
                enable: !1
            },
            checkValidHost: {
                enable: !1
            },
            dslEnabled: {
                enable: !1,
                models: {
                    "5DK40-": !0,
                    "5DK45-": !0,
                    "5DK45eWR-": !1
                }
            },
            mobile: {
                enable: !1
            },
            mobileLinks: {
                enable: !1
            },
            mobileWifiSchedule: {
                enable: !1
            },
            mobileWifiStrength: {
                enable: !1
            },
            firewallButtonsCustom: {
                enable: !0
            },
            docsis: {
                enable: !0
            },
            docsisNetworkparams: {
                enable: !0
            },
            docsisRfparams: {
                enable: !0
            },
            docsisMTA: {
                enable: !0
            },
            docsisConnection: {
                enable: !0
            },
            docsisConfiguration: {
                enable: !0
            },
            docsisConfigurationResetAndReboot: {
                enable: !1
            },
            logo: {
                enable: !1
            },
            logoInternalFooter: {
                enable: !1
            },
            logoLinkToSagemcom: {
                enable: !1
            },
            logoWait: {
                enable: !0
            },
            modelAndFirmwareVersionHeader: {
                enable: !1
            },
            intwo: {
                enable: !1
            },
            webradio: {
                enable: !1
            },
            myCloud: {
                enable: !1
            },
            qrCodes: {
                enable: !0
            },
            mfpMode: {
                enable: !1
            },
            BoBStatus: {
                enable: !1
            },
            voicePorts: {
                enable: !0
            },
            pulseDialing: {
                enable: !1
            },
            voicePortsMultiProfile: {
                enable: !1
            },
            voicePortsSingleProfile: {
                enable: !0
            },
            sipStatusVoice: {
                enable: !1
            },
            sipErrorVoice: {
                enable: !1
            },
            removeTabsVoice: {
                enable: !0
            },
            guestInfo24: {
                enable: !1
            },
            guestInfo50: {
                enable: !1
            },
            vpivci: {
                enable: !1
            },
            vlandId: {
                enable: !1
            },
            social: {
                enable: !1
            },
            portForwardingLink: {
                enable: !1
            },
            DNSLink: {
                enable: !1
            },
            parentalLink: {
                enable: !1
            },
            voipLink: {
                enable: !1
            },
            twonkyLink: {
                enable: !1
            },
            headerInfo: {
                enable: !1
            },
            phonebook: {
                enable: !1
            },
            phonebookcall: {
                enable: !1
            },
            callLogCallOption: {
                enable: !0
            },
            phonebookAddShowNumber: {
                enable: !1
            },
            answeringMachine: {
                enable: !1
            },
            sip: {
                enable: !0
            },
            telephoneMatrix: {
                enable: !0
            },
            lineUri: {
                enable: !1
            },
            hotspotEnable: {
                enable: !1
            },
            showTabTelephoneMatrix: {
                enable: !0
            },
            callSettings: {
                enable: !0
            },
            callForwarding: {
                enable: !0
            },
            callForwardingVoicemail: {
                enable: !0
            },
            callSettingsDebug: {
                enable: !0
            },
            callSettingsAdvanced: {
                enable: !0
            },
            callSettingsAdvancedStatus: {
                enable: !0
            },
            callWaitingAdvanced: {
                enable: !1
            },
            manageLineURI: {
                enable: !1
            },
            lineDetails: {
                enable: !0
            },
            ecoMode: {
                enable: !1
            },
            route: {
                enable: !1
            },
            monitoring: {
                enable: !1
            },
            lanIpv6: {
                enable: !1
            },
            dhcppdSection: {
                enable: !0
            },
            wifi5g: {
                enable: !0
            },
            wifi24g: {
                enable: !0
            },
            lanIpv4: {
                enable: !0,
                rename: "LAN & DHCP"
            },
            dhcpEnable: {
                enable: !0
            },
            natSettings: {
                enable: !1
            },
            deviceInfoNAT: {
                enable: !1
            },
            lanIpv4TvPool: {
                enable: !1
            },
            ipReservation: {
                enable: !0
            },
            ipLeaseTime: {
                enable: !0
            },
            restoreDhcp: {
                enable: !0
            },
            restoreConfig: {
                enable: !0
            },
            datapump: {
                enable: !1
            },
            guiVersion: {
                enable: !1
            },
            statistics: {
                enable: !0
            },
            statisticsEthenet: {
                enable: !1
            },
            statisticsType: {
                enable: !1
            },
            statisticsLan: {
                enable: !0
            },
            statisticsWanLayer3: {
                enable: !1
            },
            statisticsWanLayer2: {
                enable: !1,
                models: {
                    "5DK40-": !0,
                    "5DK45-": !0,
                    "5DK45eWR-": !1
                }
            },
            statisticsWanLayer1: {
                enable: !1,
                models: {
                    "5DK40-": !0,
                    "5DK45-": !0,
                    "5DK45eWR-": !1
                }
            },
            statisticsWanFTTH: {
                enable: !1
            },
            dhcpLeases: {
                enable: !1
            },
            dhcpLeasesInDHCP: {
                enable: !0
            },
            dhcpIPv6InDHCP: {
                enable: !0
            },
            arpTable: {
                enable: !0
            },
            myMedia: {
                enable: !1,
                rename: "Media"
            },
            myMediaExtras: {
                enable: !0
            },
            myMediaExtrasPrinter: {
                enable: !1
            },
            myMediaExtrasChangePassword: {
                enable: !1
            },
            bkpRestore: {
                enable: !0
            },
            firmwareUpgrade: {
                enable: !0
            },
            ntp: {
                enable: !0
            },
            ntpEnable: {
                enable: !1
            },
            tr69: {
                enable: !1
            },
            bandwidthChannelAutoWarning: {
                enable: !0
            },
            tr069SSLAuthentication: {
                enable: !1
            },
            internetUtilities: {
                enable: !1
            },
            traceRouteInterfaces: {
                enable: !0
            },
            logs: {
                enable: !0
            },
            securitylog: {
                enable: !1
            },
            systemLog: {
                enable: !1
            },
            upnplog: {
                enable: !1
            },
            operatorlog: {
                enable: !0
            },
            ping: {
                enable: !0
            },
            dnsQuery: {
                enable: !0
            },
            traceroute: {
                enable: !0
            },
            connectionUtilities: {
                enable: !1
            },
            healthCheck: {
                enable: !1
            },
            parentalControl: {
                enable: !0
            },
            parentalControlPlanning: {
                enable: !0
            },
            weekDaysNoBooleanConfig: {
                enable: !0
            },
            parentalControlTimeslot: {
                enable: !1
            },
            portTriggering: {
                enable: !0
            },
            firewallSetOFF: {
                enable: !1
            },
            firewall: {
                enable: !0
            },
            firewallDevice: {
                enable: !0
            },
            firewallRespondToPing: {
                enable: !1
            },
            ipv6Pinholling: {
                enable: !1
            },
            firewallIPv6: {
                enable: !1
            },
            firstIPv6DNS: {
                enable: !1
            },
            secondIPv6DNS: {
                enable: !1
            },
            ipv6dns: {
                enable: !1
            },
            certificates: {
                enable: !1
            },
            VPN: {
                enable: !1
            },
            parentalControlOlfeo: {
                enable: !1
            },
            parentalControlDevice: {
                enable: !0
            },
            parentalControlPrivate: {
                enable: !0
            },
            gamesAndApps: {
                enable: !0
            },
            selectUserPasswordChange: {
                enable: !0
            },
            internetConnectivityWanAdvanced: {
                enable: !1
            },
            internetConnectivityWanBasic: {
                enable: !0,
                rename: "WAN"
            },
            ipv4IptvSection: {
                enable: !1
            },
            ipv4VoipSection: {
                enable: !1
            },
            forceEditConnectionType: {
                enable: !1
            },
            manageVLAN: {
                enable: !1
            },
            trafficSpeed: {
                enable: !1
            },
            trafficSpeedGauge: {
                enable: !0
            },
            qos: {
                enable: !1
            },
            backup3gLTE: {
                enable: !1,
                implementation: "cellular"
            },
            enableBackup3gLTE: {
                enable: !1
            },
            dongleVersionBackup3g: {
                enable: !1
            },
            failoverApnLte: {
                enable: !1
            },
            mobileParameters: {
                enable: !1
            },
            mptcpAPNstatus: {
                enable: !0
            },
            simpleIpv4: {
                enable: !0
            },
            authMethod3G: {
                enable: !1
            },
            pukCode3G: {
                enable: !1
            },
            simpleIpv6: {
                enable: !0
            },
            simpleIPv6Main: {
                enable: !1
            },
            ipv6: {
                enable: !1
            },
            DHCPv6Server: {
                enable: !1
            },
            wakeOnLan: {
                enable: !0
            },
            lanVlan: {
                enable: !1
            },
            wifiSpeedInfo: {
                enable: !1
            },
            wifiBasic: {
                enable: !0
            },
            wifiWepKey: {
                enable: !1
            },
            wifiBandSteering: {
                enable: !0
            },
            wifiBandSteeringText: {
                enable: !1
            },
            wifiAlertSupportedChannel: {
                enable: !0
            },
            wifiWPS: {
                enable: !0
            },
            wifiStats: {
                enable: !0
            },
            wifiAdvanced: {
                enable: !0
            },
            advancedChannelSelection: {
                enable: !1
            },
            wifiTransmitPower: {
                enable: !1
            },
            wifiExtensionChannel: {
                enable: !1
            },
            wifiCountry: {
                enable: !1
            },
            wifiMacFilter: {
                enable: !0
            },
            wifiDualTabs: {
                enable: !0
            },
            wifiDualTabsWPS: {
                enable: !1
            },
            wifiIsolation: {
                enable: !1
            },
            cyclicPrefix: {
                enable: !1
            },
            wirelessEnvironment: {
                enable: !0
            },
            wirelessRecommendedChannel: {
                enable: !1
            },
            communSettingsGuest: {
                enable: !1
            },
            globalMaxClients: {
                enable: !1
            },
            wirelessFullAdvanced: {
                enable: !1
            },
            wirelessScheduling: {
                enable: !0
            },
            wifibackhaul: {
                enable: !1
            },
            ledToggle: {
                enable: !1
            },
            ledMode: {
                enable: !0
            },
            wirelessGuestSSID: {
                enable: !1
            },
            wirelessWDS: {
                enable: !1
            },
            wirelessMSO: {
                enable: !1
            },
            remoteAccess: {
                enable: !1
            },
            remoteAccessLanOption: {
                enable: !1
            },
            remoteAccessTrustedIP: {
                enable: !1
            },
            remoteAccessVoipOption: {
                enable: !1
            },
            remoteAccessVoipAddress: {
                enable: !1
            },
            remoteAccessWanHTTPOption: {
                enable: !1
            },
            userAccess: {
                enable: !0
            },
            myGatewayUserAccess: {
                enable: !1
            },
            userAccessMaintenance: {
                enable: !0
            },
            remoteAccessChangeUser: {
                enable: !0
            },
            dns: {
                enable: !1
            },
            showdnsinfo: {
                enable: !0
            },
            led: {
                enable: !0
            },
            ledSlider: {
                enable: !0
            },
            autodimming: {
                enable: !1
            },
            dyndns: {
                enable: !0
            },
            portForwarding: {
                enable: !0
            },
            portForwardNatButton: {
                enable: !1
            },
            dmz: {
                enable: !0
            },
            natMapping: {
                enable: !1
            },
            sipRegistrationExpireTimeout: {
                enable: !0
            },
            sipForceDtmfBand: {
                enable: !0
            },
            sipFlashHookEnable: {
                enable: !0
            },
            gpon: {
                enable: !1
            },
            wifiSignalStrength: {
                enable: !1
            },
            internetSpeed: {
                enable: !0
            },
            dect: {
                enable: !1
            },
            dectSchedule: {
                enable: !1
            },
            dectVoice: {
                enable: !1
            },
            wifiSchedule: {
                enable: !0
            },
            ledsSchedule: {
                enable: !1
            },
            passwordTipLogin: {
                enable: !1
            },
            languageOptionLogin: {
                enable: !1
            },
            slideShowTitleLogin: {
                enable: !1
            },
            displayLoginSlideShow: {
                enable: !0
            },
            loginTitle: {
                enable: !1
            },
            usbEjectButton: {
                enable: !0
            },
            usbConfigurationLink: {
                enable: !1
            },
            dataCollector: {
                enable: !1
            },
            wpsMode: {
                enable: !0
            },
            bridgemode: {
                enable: !1
            },
            bridgemodeInternetPage: {
                enable: !0
            },
            bridgemodeAccessControlPage: {
                enable: !1
            },
            trafficHistory: {
                enable: !1
            },
            lte3gBackupApnParams: {
                enable: !0
            },
            lte3gBackupApnProxyParams: {
                enable: !0
            },
            quickView: {
                enable: !0
            },
            lineCallHistory: {
                enable: !1
            },
            ringTest: {
                enable: !1
            },
            ringTestTools: {
                enable: !1
            },
            wifiTV: {
                enable: !1
            },
            walledGarden: {
                enable: !1
            },
            dmzIPv6: {
                enable: !1
            },
            ipv6DefaultRangeAddress: {
                enable: !1
            },
            deviceInfoPreLogin: {
                enable: !1
            },
            stbManufaturer: {
                enable: !0
            },
            statisticsSFP: {
                enable: !0
            },
            massStorageUSB: {
                enable: !0
            },
            wifi24Schedule: {
                enable: !0
            },
            wifi5Schedule: {
                enable: !0
            },
            headerBoxesLogin: {
                enable: !0
            },
            headerControlsWifi: {
                enable: !0
            },
            bitrate: {
                enable: !0
            },
            showAddressingTypeSelect: {
                enable: !1
            },
            PPPoePassthrough: {
                enable: !1
            },
            bridgeModeBlockPages: {
                enable: !0
            },
            bridgeModeConnectionType: {
                enable: !1
            },
            loginOte: {
                enable: !1
            },
            nowifi: {
                enable: !0
            },
            connectPPPoE: {
                enable: !1
            },
            isCable: {
                enable: !0
            },
            mySagemcomBoxAdvancedOptions: {
                enable: !0
            },
            homeWiFiBoxes: {
                enable: !0
            },
            networkMapNewRule: {
                enable: !0
            },
            dnsIPv6: {
                enable: !1
            },
            dnsIPv4: {
                enable: !0
            },
            authenticationProtocol: {
                enable: !1
            },
            dns1IPv4: {
                enable: !0
            },
            dns2IPv4: {
                enable: !0
            },
            wifiGuestRecommendChannel: {
                enable: !0
            },
            showIPSecPPTP: {
                enable: !1
            },
            CPULoadField: {
                enable: !1
            },
            memoryField: {
                enable: !1
            },
            usDsDisplay: {
                enable: !1
            },
            globalSip: {
                enable: !1
            },
            portMirror: {
                enable: !1
            },
            ssidCreation: {
                enable: !1
            },
            pingInterface: {
                enable: !1
            },
            advancedVoIPSettings: {
                enable: !0
            },
            outboundProxyInternal: {
                enable: !0
            },
            isSiminn: {
                enable: !1
            },
            masmovil: {
                enable: !1
            },
            mptcp: {
                enable: !1
            },
            reset: {
                enable: !0
            },
            dhcpEnablev6: {
                enable: !1
            },
            routerAdvertisementConfig: {
                enable: !1
            },
            ianaEnable: {
                enable: !1
            },
            IAPDEnable: {
                enable: !1
            },
            ulaIPv6Enabled: {
                enable: !1
            },
            lanIPv6LinkLocal: {
                enable: !0
            },
            ianaManualPrefixes: {
                enable: !1
            },
            DTMFTransmissionMode: {
                enable: !1
            },
            networkConfiguration: {
                enable: !1
            },
            wirelessEnableATF: {
                enable: !1
            },
            rejectRuleEnable: {
                enable: !1
            },
            statusBackup3gLTE: {
                enable: !0
            },
            mobTechStatusBackup3gLTE: {
                enable: !0
            },
            apnBackup3g: {
                enable: !1
            },
            daylightSavingTime: {
                enable: !1
            },
            wifi24Speed: {
                enable: !1
            },
            wifi5Speed: {
                enable: !1
            },
            DLNA: {
                enable: !0
            },
            MTU: {
                enable: !1
            },
            lanMTU: {
                enable: !1
            },
            wanMTU: {
                enable: !1
            },
            connectionServices: {
                enable: !1
            },
            pinCode3g: {
                enable: !1
            },
            busyOnBusy: {
                enable: !1
            },
            statusReason: {
                enable: !0
            },
            lineCallWaiting: {
                enable: !1
            },
            lineMailbox: {
                enable: !1
            },
            networkSettings: {
                enable: !1
            },
            userSessionTimeout: {
                enable: !0
            },
            ledDimmedMode: {
                enable: !1
            },
            antennaSettings: {
                enable: !1
            },
            displayPassword: {
                enable: !0
            },
            validateBlacklistedPort: {
                enable: !1
            },
            ipv4OnlineDuration: {
                enable: !1
            },
            ipVersionStatus: {
                enable: !1
            },
            statusDDns: {
                enable: !0
            },
            enableWMM: {
                enable: !0
            },
            wifiShowCurrentBandwidth: {
                enable: !1
            },
            lanPort4BridgeModeConfirmMsg: {
                enable: !0
            },
            licenses: {
                enable: !1
            },
            mobileOpBackup3g: {
                enable: !1
            },
            imsiBackup3g: {
                enable: !1
            },
            deviceInfoNATEntries: {
                enable: !1
            },
            msisdnBackup3g: {
                enable: !1
            },
            imeiDeviceInfo: {
                enable: !1
            },
            hostnameReadOnly: {
                enable: !0
            },
            myMediaHiddenSharedName: {
                enable: !1
            },
            layerInterfaceMainPage: {
                enable: !1
            },
            layerInterfaceDeviceInfo: {
                enable: !1
            },
            showlte: {
                enable: !1
            },
            portScanDetection: {
                enable: !1
            },
            networkSettingWarnMessage: {
                enable: !0
            },
            authenticationModeGpon: {
                enable: !1
            },
            wifiEcoMode: {
                enable: !1
            },
            bandSteeringWarning: {
                enable: !1
            },
            wifiMeshWarning: {
                enable: !1
            },
            semiReset: {
                enable: !1
            },
            myBoxDeviceList: {
                enable: !1
            },
            showGreTitle: {
                enable: !0
            },
            showGreBackup: {
                enable: !0
            },
            NAS: {
                enable: !1
            },
            shaperRate: {
                enable: !1
            },
            multiNAT: {
                enable: !1
            },
            spectrumWifi: {
                enable: !1
            }
        },
        readOnlyPages: ["user.mysagemcombox.route.static"],
        globals: {
            welcome: {
                EN: "WiFi Hub C2",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            trafficSpeedMonitoring: {
                EN: "Wan speed Test",
                FR: "Test de vitesse Wan",
                ES: "Prueba de velocidad Wan",
                DE: "Wan Geschwindigkeitstest",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO"
            },
            mySagemcomBox: {
                EN: "Gateway Settings",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            lightSettings: {
                EN: "Light Settings",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            advancedOptions: {
                EN: "Firewall advanced",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip1: {
                EN: "Edit your device settings or check your network info here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip2: {
                EN: "Change your Internet access settings here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip3: {
                EN: "Check your Internet connection status here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mymediaMain: {
                EN: "Share content on devices connected to your Wi-Fi Halo's USB ports here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            bandSteeringOffAlert: {
                EN: "When band steering is enabled, Wi-Fi 2.4GHz and 5GHz SSID names and security parameters are identical. Devices will connect automatically to the best signal.",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip4: {
                EN: "Any devices connected directly to your gateway are here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip5: {
                EN: "Here's information about your 2.4GHz Wi-Fi network",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip9: {
                EN: "Here's information about your 5GHz Wi-Fi network",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            mainTip10: {
                EN: "Any devices connected to your Wi-Fi Halo's USB ports are here",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wifiSpecificKeyRule: {
                EN: "The password is a combination of 8 random UPPERCASE letters and numbers, avoiding 'I' and '1'",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wifi5GChannelWarning: {
                EN: "The SSID may disappear to clients that do not support this channel. <br> Certain WiFi clients may not be capable of utilizing the selected channel.",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            ledModeOptionDark: {
                EN: "Dark",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            ledModeOptionLight: {
                EN: "Always On",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep1: {
                EN: "Step 1 of 5",
                FR: "Étape 1 sur 5",
                ES: "Paso 1 de 5",
                DE: "Schritt 1 von 5",
                IT: "Fase 1 di 5",
                DA: "Trin 1 af 5",
                AR: "الخطوة رقم 1 من عدد 5 خطوات",
                PT: "passo 1 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep2: {
                EN: "Step 2 of 5",
                FR: "Étape 2 sur 5",
                ES: "Paso 2 de 5",
                DE: "Schritt 2 von 5",
                IT: "Fase 2 di 5",
                DA: "Trin 2 af 5",
                AR: "الخطوة رقم 2 من عدد 5 خطوات",
                PT: "passo 2 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep4: {
                EN: "Step 3 of 5",
                FR: "Étape 3 sur 5",
                ES: "Paso 3 de 5",
                DE: "Schritt 3 von 5",
                IT: "Fase 3 di 5",
                DA: "Trin 3 af 5",
                AR: "الخطوة رقم 3 من عدد 5 خطوات",
                PT: "passo 3 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep5: {
                EN: "Step 4 of 5",
                FR: "Étape 4 sur 5",
                ES: "Paso 4 de 5",
                DE: "Schritt 4 von 5",
                IT: "Fase 4 di 5",
                DA: "Trin 4 af 5",
                AR: "الخطوة رقم 4 من عدد 5 خطوات",
                PT: "passo 4 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstStep6: {
                EN: "Step 5 of 5",
                FR: "Étape 5 sur 5",
                ES: "Paso 5 de 5",
                DE: "Schritt 5 von 5",
                IT: "Fase 5 di 5",
                DA: "Trin 5 af 5",
                AR: "الخطوة رقم 5 من عدد 5 خطوات",
                PT: "passo 5 de 5",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiNetName24: {
                EN: "2.4GHz SSID Name",
                FR: "Nom SSID 2.4GHz",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiNetName5: {
                EN: "5GHz SSID Name",
                FR: "Nom SSID 5GHz",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiNetEncrip24: {
                EN: "Wi-Fi Network Encription (2.4GHz)",
                FR: "Encryption Wi-Fi (2.4GHz)",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiNetEncrip5: {
                EN: "Wi-Fi Network Encription (5GHz)",
                FR: "Encryption Wi-Fi (5GHz)",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiKey24: {
                EN: "2.4GHz Security Key",
                FR: "Clé de sécurité 2.4GHz",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstWifiKey5: {
                EN: "5GHz Security Key",
                FR: "Clé de sécurité 5GHz",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            firstInternetSetup: {
                EN: "Internet Setup",
                FR: "Configuration internet",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wanInterface: {
                EN: "WAN Interfaces",
                FR: "Interfaces WAN",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            quickSetupWizard: {
                EN: "Quick Setup Wizard",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wanType: {
                EN: "WAN Type",
                FR: "Type de WAN",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            accessWizard: {
                EN: "Access to wizard",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            timeZone: {
                EN: "Current Timezone",
                FR: "Fuseau horaire actuel",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            QSWDescription: {
                EN: "This setup allow you to view your gateway cables connection.",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            desiredPassword: {
                EN: "Desired Password",
                FR: "Mot de passe désiré",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            connectionType: {
                EN: "Connection Type",
                FR: "Type de connection",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            addressingType: {
                EN: "Addressing Type",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            skip: {
                EN: "Skip",
                FR: "Passer",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            channelTip3: {
                EN: "Selected channel might not be visible or supported by all wireless client",
                FR: "Le canal selectionné peut ne pas être visible ou supporté par tous les clients sans fil",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            passwordTip2: {
                EN: "WEP 64 mode requires a 5 or 10 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WEP 64 nécessite un mot de passse de 5 à 10 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WEP64 erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 5 und 10 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WEP 64 necessita una chiave di cifratura tra 5 e 10 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WEP 64 tilstand kræver en adgangskode på 5 eller 10 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WEP64 requer uma password de 5 ou 10 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "Modul WEP 64 necesita o parola de 5 sau 10 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WEP 64 üzemmódban 5 vagy 10 karakteres jelszó szükséges. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip3: {
                EN: "WEP 128 mode requires a 13 or 26 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WEP 128 nécessite un mot de passse de 13 à 26 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WEP128 erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 13 und 26 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WEP 128 necessita una chiave di cifratura tra 13 e 26 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WEP 128 tilstand kræver en adgangskode på 13 eller 26 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WEP128 requer uma password de 13 ou 26 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "Modul WEP 128 necesita o parola de 13 sau 26 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WEP 128 üzemmódban 13 vagy 26 karakteres jelszó szükséges. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip4: {
                EN: "WPA requires a 8-63 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WPA nécessite un mot de passse de 8 à 63 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WPA erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 8 und 63 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WPA necessita una chiave di cifratura tra 8 e 63 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WPA tilstand kræver en adgangskode på 8-63 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WPA requer uma password de 8-63 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "WPA necesita o parola de 8-63 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WPA 8-63 karakteres jelszót igényel. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip5: {
                EN: "WPA2 requires a 8-63 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WPA2 nécessite un mot de passse de 8 à 63 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WPA2 erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 8 und 63 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WPA2 necessita una chiave di cifratura tra 8 e 63 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WPA2 tilstand kræver en adgangskode på 8-63 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WPA2 requer uma password de 8-63 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "WPA2 necesita o parola de 8-63 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WPA2-nek 8-63 karakteres jelszó szükséges. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip6: {
                EN: "WPA requires a 8-63 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WPA nécessite un mot de passse de 8 à 63 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WPA erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 8 und 63 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WPA necessita una chiave di cifratura tra 8 e 63 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WPA tilstand kræver en adgangskode på 8-63 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "Modo WPA requer uma password de 8-63 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "WPA necesita o parola de 8-63 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WPA 8-63 karakteres jelszót igényel. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            passwordTip8: {
                EN: "WPA2 Personal (AES) requires a 8-63 character password. You may use the following characters: 0-9, a-z, A-Z and +*%=-_! symbols",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            passwordTip7: {
                EN: "WPA/WPA2 Personal (TKIP/AES mixed) requires a 8-63 character password. You may use the following characters: 0-9, a-z, A-Z and +*%=-_! symbols",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            passwordTip9: {
                EN: "WPA3 requires a 8-63 character password. Only the following characters can be used: a-z, A-Z, 0-9 and ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ and the space character must not be at the beginning or end of the password",
                FR: "Le WPA3 nécessite un mot de passse de 8 à 63 caractères. Seul les caractères suivants peuvent-être utilisés: a-z, A-Z, 0-9 et ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ et le caractère espace ne doit pas être en début ou fin de mot de passe",
                ES: "TODO",
                DE: "Die WLAN-Verschlüsselungsmethode WPA3 erfordert die Vergabe eines WLAN-Kennworts, dass zwischen 8 und 63 Zeichen lang sein muss. Nur die folgenden Zeichen können verwendet werden: a-z, A-Z, 0-9 und das Leerzeichen darf nicht am Anfang oder Ende des Kennworts stehen",
                IT: "WPA3 necessita una chiave di cifratura tra 8 e 63 caratteri. Solamente i seguenti caratteri possono esser utilizzati: a-z, A-Z, 0-9 e ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ e il carattere spazio non deve essere all'inizio o alla fine della password",
                DA: "WPA3 tilstand kræver en adgangskode på 8-63 tegn. Kun følgende tegn kan anvendes: a-z, A-Z, 0-9 og + * % = - _ !",
                AR: "TODO",
                PT: "modo WPA3 requer uma password de 8-63 caracteres. Apenas os seguintes caracteres podem ser usados: a-z, A-Z, 0-9 and + * % = - _ !",
                RO: "WPA3 necesita o parola de 8-63 caractere. Urmatoarele caractere pot fi folosite: a-z, A-Z, 0-9 and + * % = - _ !",
                IND: "TODO",
                HU: "A WPA3-nek 8-63 karakteres jelszó szükséges. Csak a következő karakterek használhatók: a-z, A-Z, 0-9 és + *% = - _!"
            },
            online: {
                EN: "ONLINE",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            offline: {
                EN: "OFFLINE",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            internet: {
                EN: "INTERNET",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            accessControl: {
                EN: "ACCESS CONTROL",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            maintenance: {
                EN: "Maintenance & Management",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO"
            },
            networkMapBoxMsg1: {
                EN: "There are",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            networkMapBoxMsg2: {
                EN: "connected device(s) on Ethernet and",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            networkMapBoxMsg3: {
                EN: "connected devices on Wi-Fi",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            off: {
                EN: "OFF",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            myNetwork: {
                EN: "My Network",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            networkMap: {
                EN: "Network Map",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            fileSharing: {
                EN: "SAMBA",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wanMACAddress: {
                EN: "HFC MAC Address",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "CM MAC-adresse",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            remoteAccess: {
                EN: "Admin interface access",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            remoteManagementTitle: {
                EN: "Admin interface access",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            basic_wan_status: {
                EN: "WAN Status",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            deviceinfo: {
                EN: "Device Information",
                FR: "Informations",
                ES: "Información del dispositivo",
                DE: "Geräteinformation",
                IT: "Informazioni del gateway",
                DA: "Enhedsoplysninger",
                AR: "معلومات الجهاز",
                PT: "informaçao do dispositivo",
                RO: "TODO",
                IND: "TODO"
            },
            wifiStats: {
                EN: "Wi-Fi Stats",
                FR: "Statistiques Wi-Fi",
                ES: "Estadísticas Wi-Fi",
                DE: "WLAN-Status",
                IT: "Statistiche Wi-Fi",
                DA: "Wi-Fi statistik",
                AR: "احصائيات واي فاي",
                PT: "estatisticas de Wi-Fi",
                RO: "TODO",
                IND: "TODO"
            },
            DOCSISVersion: {
                EN: "DOCSIS 3.1",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO"
            },
            internetUtilities: {
                EN: "Internet Utilities",
                FR: "Utilitaires Internet",
                ES: "Internet Utilidades",
                DE: "Internet-Anwendungen",
                IT: "Utilità Internet",
                DA: "Internetfunktioner",
                AR: "برامج خدمة الإنترنت",
                PT: "utilidades de internet",
                RO: "TODO",
                IND: "TODO"
            },
            resetExplained: {
                EN: "Factory reset will restore Gateway default options, you will lose all your changes.",
                FR: "La réinitialisation usine restaure les options par défaut du modem, vous perdrez toutes vos modifications.",
                ES: "El restablecimiento de la configuración predeterminada de fábrica restaurará las opciones predeterminadas del módem. Perderá todos los cambios realizados.",
                DE: "Das Rest auf die Werkseinstellungen wird die Gateway-Standardoptionen wiederherstellen. Alle Ihre Änderungen gehen verloren.",
                IT: "Il ripristino delle impostazioni predefinite ripristina le opzioni di gateway predefinite, si perderanno tutte le modifiche.",
                DA: "Nulstil til fabriksindstillinger vil gendanne standardmulighederne for gatewayen, og du mister alle dine ændringer.",
                AR: "سوف تستعيد عملية إعادة تعيين إعدادات المصنع الخياراتِ الافتراضية للبوابة، وستفقد كلَ ما عَمِلته من تغييرات.",
                PT: "o reset de fabrica faz o gateway voltar as opçoes de defeito, perderá todos as configuraçoes",
                RO: "TODO",
                IND: "TODO"
            },
            rebootExplained: {
                EN: "Restarting  will take a few minutes, check leds on your gateway to follow status.",
                FR: "Le redémarrage prendra quelques minutes, vérifiez les indicateurs lumineux de votre modem pour connaitre son statut.",
                ES: "El reinicio llevará unos minutos. Compruebe los indicadores luminosos de su módem para conocer el estado.",
                DE: "Der Neustart kann einige Minuten dauern. Überprüfen Sie die LEDs auf Ihrem Gateway, um den Status zu überwachen.",
                IT: "Il riavvio richiederà alcuni minuti, controlla i led sul gateway per seguire lo stato.",
                DA: "Genstart tager et par minutter, tjek din gateways LED'er for at følge status.",
                AR: "سوف تستغرق إعادة التشغيل بضعَ دقائق، انظر مصابيح الإشارة على جهاز البوابة لديك لمتابعة الحالة.",
                PT: "o reinicio tardara alguns minutos, verifique os leds para seguir o estado",
                RO: "TODO",
                IND: "TODO"
            },
            ledPageInfo: {
                EN: "The front LEDs indicate different functions of the device. It can be set in two modes: Dark mode – after 5 minutes of normal activity, the status LEDs will turn off and the power LED will turn blue. If any error occurs, or the WiFi/WPS button is pushed, LEDs will light up again. Always on – status LEDs will always indicate device status.",
                FR: "TODO",
                ES: "TODO",
                DE: "Die folgende Tabelle zeigt die Gerätedaten und den Status des Kabelrouters.",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "Informatiile de mai jos arata starea curenta a acestui router.",
                IND: "TODO"
            },
            lightControl: {
                EN: "LED Lights",
                FR: "Contrôle LEDs",
                ES: "Control de luz",
                DE: "Leuchtstärke",
                IT: "Controllo LED",
                DA: "Lysstyring",
                AR: "TODO",
                PT: "control de luz",
                RO: "Control LED-uri",
                IND: "TODO"
            },
            ledMode: {
                EN: "Dark Mode / Always ON",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            hubLight: {
                EN: "Dark Mode / Always ON",
                FR: "LEDs",
                ES: "LEDs",
                DE: "LEDs",
                IT: "LEDs",
                DA: "LED´er",
                AR: "TODO",
                PT: "LEDs",
                RO: "LED-uri",
                IND: "TODO"
            },
            cmSignal: {
                EN: "Downstream Signal",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            cableModemPageDescription2: {
                EN: "This page displays information on the status of the cable modem's HFC network connectivity.",
                FR: "TODO",
                ES: "TODO",
                DE: "Auf dieser Seite werden Informationen zum Status der Netzwerkkonnektivität des Kabelmodems im Kabelnetz angezeigt.",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO"
            },
            notbooked: {
                EN: "Not registered",
                FR: "TODO",
                ES: "TODO",
                DE: "Nicht gebucht",
                IT: "TODO",
                DA: "TODO",
                AR: "TODO",
                PT: "TODO",
                RO: "Nerezervat",
                IND: "TODO"
            },
            wan_blocking: {
                EN: "WAN Ping Blocking",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "WAN Ping blokering",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            enableWireless: {
                EN: "Enable SSID",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "Aktiver SSID",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO"
            },
            enableAutoIPv6Assignment: {
                EN: "Enable SLAAC",
                FR: "TODO",
                ES: "TODO",
                DE: "SLAAC aktivieren",
                IT: "TODO",
                DA: "Aktivér SLAAC",
                AR: "TODO",
                PT: "TODO",
                RO: "Activați SLAAC",
                IND: "TODO"
            },
            lanIpv4: {
                EN: "LAN & DHCP",
                FR: "TODO",
                ES: "TODO",
                DE: "TODO",
                IT: "TODO",
                DA: "LAN & DHCP",
                AR: "TODO",
                PT: "TODO",
                RO: "TODO",
                IND: "TODO"
            },
            wpsAlert: {
                EN: "In order to completely disable the WPS functionality you have to turn it off for every available radio frequency.",
                FR: "Si	la	connexion	Wi-Fi	Protected	Setup	est	désactivée	ici,	le	bouton	physique	de	votre	routeur	sera	également	désactivé.",
                ES: "Si	la	función	Wi-Fi	Protected	Setup	está	deshabilitada	aquí,	también	se	desactivará	el	botón	en	el	router.",
                DE: "Um die WPS-Funktion vollständig zu deaktivieren, müssen Sie sie für jede verfügbare Radiofrequenz deaktivieren.",
                IT: "Se	il	setup	Wi-Fi	protetto	è	disabilitato	qui,	anche	il	pulsante	fisico	sul	router	sarà	disabilitato.",
                DA: "Hvis	'Wi-Fi	beskyttet	opsætning'	(WPS)	er	deaktiveret	her,	vil	den	fysiske	knap	på	din	router	også	være	deaktiveret.",
                AR: "في	حال	تم	تعطيل	إعدادات	حماية	واي	فاي	هنا،	فإنه	سيتم	تعطيل	الزر	على	جهاز	الرواتر	لديك.	",
                PT: "Se	o	setup	protegido	de	Wi-Fi	estiver	desabilitado	aquí,	o	botao	fisico	do	seu	router	tambem	esta	desativado.",
                RO: "TODO",
                IND: "TODO",
                HU: "Annak érdekében, hogy a WPS-funkciók teljesen letilthatók legyenek, minden rendelkezésre álló rádiófrekvenciára ki kell kapcsolni."
            }
        },
        routes: function(a) {
            return {
                desktop: {
                    "public": [{
                        name: "public",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a["public"]
                            }
                        }
                    }, {
                        name: "public.404",
                        state: {
                            url: "/404/",
                            templateUrl: "404.html"
                        }
                    }, {
                        name: "public.blockedAccess",
                        state: {
                            url: "/blockedAccess/",
                            templateUrl: "views/blocked-access.html",
                            controller: "BlockedAccessController"
                        }
                    }],
                    anon: [{
                        name: "anon",
                        state: {
                            "abstract": !0,
                            template: "<ui-view/>",
                            data: {
                                access: a.anon
                            }
                        }
                    }, {
                        name: "anon.login",
                        state: {
                            url: "/login/:user",
                            templateUrl: this.simpleLogin ? "views/base.html" : "views/login-simple-comhem.html",
                            controller: "LoginController"
                        }
                    }, {
                        name: "anon.login.simple",
                        state: {
                            url: "/credentials",
                            templateUrl: "views/login-simple-comhem.html",
                            controller: "LoginController"
                        }
                    }, {
                        name: "anon.androidHelp",
                        state: {
                            url: "/androidHelp/",
                            templateUrl: "views/android-help.html",
                            controller: "LoginController"
                        }
                    }, {
                        name: "anon.mysagemcombox",
                        state: {
                            "abstract": !0,
                            url: "/mybox",
                            templateUrl: "views/base.html"
                        }
                    }, {
                        name: "anon.mysagemcombox.deviceInfo",
                        state: {
                            url: "/deviceInfo",
                            templateUrl: "views/mysagemcombox.simple-main.html"
                        }
                    }],
                    user: [{
                        name: "user",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.guest
                            }
                        }
                    }, {
                        name: "user.home",
                        state: {
                            url: "/",
                            templateUrl: this.mainPage || "views/main-comhem.html",
                            controller: "ConnectedDevicesController"
                        }
                    }, {
                        name: "user.mynetwork",
                        state: {
                            url: "/mynetwork",
                            templateUrl: "views/mynetwork.main.html"
                        }
                    }, {
                        name: "user.mynetwork.map",
                        state: {
                            url: "/networkMap",
                            templateUrl: "views/mynetwork.map.html",
                            controller: "MyNetworkController",
                            data: {
                                module: "networkMap"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox",
                        state: {
                            url: "/mybox",
                            templateUrl: "views/mysagemcombox.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo",
                        state: {
                            url: "/deviceInfo",
                            templateUrl: "views/mysagemcombox.device-info.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.dhcp",
                        state: {
                            url: "/DHCP",
                            templateUrl: "views/mysagemcombox.dhcp.html",
                            controller: "DhcpController",
                            data: {
                                module: "lanIpv4"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo.dhcpLeases",
                        state: {
                            url: "/dhcpLeases",
                            templateUrl: "views/mysagemcombox.device-info.dhcp-leases.html",
                            controller: "DhcpLeasesController",
                            data: {
                                module: "dhcpLeases"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo.statistics",
                        state: {
                            url: "/statistics",
                            templateUrl: "views/mysagemcombox.device-info.statistics.html",
                            controller: "StatisticsController",
                            data: {
                                module: "statistics"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo.arp",
                        state: {
                            url: "/arp",
                            templateUrl: "views/mysagemcombox.device-info.arp.html",
                            controller: "ARPController",
                            data: {
                                module: "arpTable"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.deviceInfo.deviceInfo",
                        state: {
                            url: "/deviceInfo",
                            templateUrl: "views/mysagemcombox.device-info.device-info.html",
                            controller: "DeviceInformationController"
                        }
                    }, {
                        name: "user.mysagemcombox.mass-storage",
                        state: {
                            url: "/mass-storage/",
                            templateUrl: "views/mysagemcombox.mass-storage.html",
                            controller: "MassStorageController"
                        }
                    }, {
                        name: "user.mysagemcombox.dns",
                        state: {
                            url: "/dns",
                            templateUrl: "views/mysagemcombox.dns.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.dns.server",
                        state: {
                            url: "/server",
                            templateUrl: "views/mysagemcombox.dns.server.html",
                            controller: "DnsServerController"
                        }
                    }, {
                        name: "user.mysagemcombox.ddns",
                        state: {
                            url: "/ddns",
                            templateUrl: "views/mysagemcombox.ddns.html",
                            controller: "DdnsController",
                            data: {
                                module: "dyndns"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance",
                        state: {
                            url: "/maintenance",
                            controller: "MaintenanceMainController",
                            templateUrl: this.simpleMaintenance ? "views/mysagemcombox.maintenance.mainSimple.html" : "views/mysagemcombox.maintenance.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.reset",
                        state: {
                            url: "/reset",
                            templateUrl: "views/mysagemcombox.maintenance.reset.html",
                            controller: "MaintenanceResetController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.firmwareUpdate",
                        state: {
                            url: "/firmware-update",
                            templateUrl: "views/mysagemcombox.maintenance.firmware-update.html",
                            controller: "MaintenanceResetController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.user",
                        state: {
                            url: "/user",
                            templateUrl: "views/access-control.user.html",
                            controller: "AccessControlUserController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log",
                        state: {
                            url: "/log",
                            templateUrl: "views/mysagemcombox.maintenance.log.main.html"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log.systemlog",
                        state: {
                            url: "/system-log",
                            templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                            controller: "MaintenanceSystemLogController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log.operatorlog",
                        state: {
                            url: "/operator-log",
                            templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                            controller: "MaintenanceSystemLogController",
                            data: {
                                type: "operator"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log.securitylog",
                        state: {
                            url: "/security-log",
                            templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                            controller: "MaintenanceSystemLogController",
                            data: {
                                type: "firewall"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.log.upnplog",
                        state: {
                            url: "/upnp-log",
                            templateUrl: "views/mysagemcombox.maintenance.system-log.html",
                            controller: "MaintenanceSystemLogController",
                            data: {
                                type: "upnp"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.internetUtilities",
                        state: {
                            url: "/internet-utilities",
                            templateUrl: "views/mysagemcombox.maintenance.internet-utilities.html",
                            controller: "MaintenanceInternetUtilitiesController",
                            data: {
                                module: "internetUtilities"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.filteredUtilities",
                        state: {
                            url: "/internet-utilities/:tool",
                            templateUrl: "views/mysagemcombox.maintenance.internet-utilities.html",
                            controller: "MaintenanceInternetUtilitiesController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.bkpRestore",
                        state: {
                            url: "/backup-restore",
                            templateUrl: "views/mysagemcombox.maintenance.bkpRestore.html",
                            controller: "MaintenanceResetController",
                            data: {
                                module: "bkpRestore"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.ntp",
                        state: {
                            url: "/ntp",
                            templateUrl: "views/mysagemcombox.maintenance.ntp.html",
                            controller: "NTPController",
                            data: {
                                module: "ntp"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.healthCheck",
                        state: {
                            url: "/healthCheck",
                            templateUrl: "views/mysagemcombox.maintenance.health-check.html",
                            controller: "MaintenanceHealthCheckController"
                        }
                    }, {
                        name: "user.mysagemcombox.maintenance.firstInstall",
                        state: {
                            url: "/firstInstall",
                            templateUrl: "views/mysagemcombox.maintenance.first-install.html"
                        }
                    }, {
                        name: "user.mysagemcombox.autodimming",
                        state: {
                            url: "/autodimming",
                            templateUrl: "views/mysagemcombox.autodimming.html",
                            controller: "AutoDimmingController"
                        }
                    }, {
                        name: "user.mysagemcombox.ecoMode",
                        state: {
                            url: "/ecoMode",
                            templateUrl: "views/mysagemcombox.eco-mode.html",
                            controller: "LEDController"
                        }
                    }, {
                        name: "user.mysagemcombox.led",
                        state: {
                            url: "/led",
                            templateUrl: "views/mysagemcombox.led.html",
                            controller: "LEDController"
                        }
                    }, {
                        name: "user.ethernet",
                        state: {
                            url: "/ethernet",
                            templateUrl: "views/ethernet.html",
                            controller: "EthernetController"
                        }
                    }, {
                        name: "user.wifi",
                        state: {
                            url: "/wifidual/:radio/:mode",
                            templateUrl: "views/wifi.main.dual.html",
                            controller: "WifiMainController",
                            data: {
                                title: "wifi"
                            }
                        }
                    }, {
                        name: "user.wifi.basic",
                        state: {
                            url: "/basic",
                            templateUrl: "views/wifi.basic.dual.generic.html",
                            controller: "WiFiBasicDualController",
                            data: {
                                title: "basic"
                            }
                        }
                    }, {
                        name: "user.wifi.bandsteering",
                        state: {
                            url: "/bandsteering",
                            templateUrl: "views/wifi.bandsteering.html",
                            controller: "WiFiBandSteeringController"
                        }
                    }, {
                        name: "user.wifidual.wps",
                        state: {
                            url: "/wps",
                            templateUrl: "views/wifi.wps.html",
                            controller: "WiFiDualWpsController",
                            data: {
                                title: "wps"
                            }
                        }
                    }, {
                        name: "user.wifi.advanced",
                        state: {
                            url: "/advanced",
                            templateUrl: "views/wifi.advanced.html",
                            controller: "WiFiAdvancedController",
                            data: {
                                module: "wifiAdvanced"
                            }
                        }
                    }, {
                        name: "user.wifi.wps",
                        state: {
                            url: "/wps",
                            templateUrl: "views/wifi.wps.html",
                            controller: "WiFiDualWpsController",
                            data: {
                                module: "wifiWPS"
                            }
                        }
                    }, {
                        name: "user.wifi.stats",
                        state: {
                            url: "/stats",
                            templateUrl: "views/wifi.stats.html",
                            controller: "WiFiStatsController",
                            data: {
                                module: "wifiStats"
                            }
                        }
                    }, {
                        name: "user.wifi.mac-filter",
                        state: {
                            url: "/mac-filter",
                            templateUrl: "views/wifi.mac-filter.html",
                            controller: "WiFiMacFilterController",
                            data: {
                                module: "wifiMacFilter"
                            }
                        }
                    }, {
                        name: "user.schedule.basic",
                        state: {
                            url: "/scheduling",
                            templateUrl: "views/wifi.scheduling.html",
                            controller: "WifiSchedulingController"
                        }
                    }, {
                        name: "user.wifi.environment",
                        state: {
                            url: "/environment",
                            templateUrl: "views/wifi.environment.main.html"
                        }
                    }, {
                        name: "user.wifi.environment.scan",
                        state: {
                            url: "/scan",
                            templateUrl: "views/wifi.environment.scan.html",
                            controller: "WiFiEnvironmentController"
                        }
                    }, {
                        name: "user.wifi.environment.recommended",
                        state: {
                            url: "/recommended",
                            templateUrl: "views/wifi.environment.recommended.html",
                            controller: "WiFiChannelController"
                        }
                    }, {
                        name: "user.wifi.guest",
                        state: {
                            url: "/guest",
                            templateUrl: "views/wifi.guest.html"
                        }
                    }, {
                        name: "user.wifi.wds",
                        state: {
                            url: "/wds",
                            templateUrl: "views/wifi.wds.html"
                        }
                    }, {
                        name: "user.accessControl",
                        state: {
                            url: "/access-control",
                            templateUrl: "views/access-control.main.html"
                        }
                    }, {
                        name: "user.accessControlScheduling",
                        state: {
                            url: "/access-control/scheduling/:scheduleType/:mode",
                            templateUrl: "views/scheduling.main.html",
                            controller: "SchedulingMainController",
                            data: {
                                mainPage: "accessControl"
                            }
                        }
                    }, {
                        name: "user.accessControlScheduling.control",
                        state: {
                            url: "/control",
                            templateUrl: "views/scheduling.control.html",
                            controller: "SchedulingController",
                            data: {
                                title: "wifiScheduleTitle"
                            }
                        }
                    }, {
                        name: "user.accessControl.wifi",
                        state: {
                            url: "/wifi/:radio/:mode",
                            templateUrl: "views/access-control.main.wifi.html",
                            controller: "WifiMainController",
                            data: {
                                title: "wifi"
                            }
                        }
                    }, {
                        name: "user.accessControl.wifi.mac-filter",
                        state: {
                            url: "/mac-filter",
                            templateUrl: "views/wifi.mac-filter.html",
                            controller: "WiFiMacFilterController",
                            data: {
                                module: "wifiMacFilter"
                            }
                        }
                    }, {
                        name: "user.accessControl.dmz",
                        state: {
                            url: "/dmz",
                            templateUrl: "views/access-control.dmz.html",
                            controller: "DMZController"
                        }
                    }, {
                        name: "user.accessControl.dmzIPv6",
                        state: {
                            url: "/dmzIPv6",
                            templateUrl: "views/access-control.dmz-ipv6.html",
                            controller: "DmzIPv6Controller"
                        }
                    }, {
                        name: "user.accessControl.natMapping",
                        state: {
                            url: "/nat-mapping",
                            templateUrl: "views/access-control.nat-mapping.html",
                            controller: "NatMappingController"
                        }
                    }, {
                        name: "user.accessControl.firewall",
                        state: {
                            url: "/firewall",
                            templateUrl: "views/access-control.firewall.html",
                            controller: "FirewallController",
                            data: {
                                module: "firewall"
                            }
                        }
                    }, {
                        name: "user.accessControl.remoteaccess",
                        state: {
                            url: "/remote-access",
                            templateUrl: "views/access-control.remote-access.html",
                            controller: "RemoteManagementController",
                            data: {
                                module: "remoteAccess"
                            }
                        }
                    }, {
                        name: "user.accessControl.advancedOptions",
                        state: {
                            url: "/advanced",
                            templateUrl: "views/mysagemcombox.advanced.options.html",
                            controller: "AdvancedOptionsController"
                        }
                    }, {
                        name: "user.accessControl.user",
                        state: {
                            url: "/user",
                            templateUrl: "views/access-control.user.html",
                            controller: "AccessControlUserController"
                        }
                    }, {
                        name: "user.accessControl.upnp",
                        state: {
                            url: "/upnp",
                            templateUrl: "views/access-control.upnp.html",
                            controller: "UPnPController"
                        }
                    }, {
                        name: "user.accessControl.parentalControl",
                        state: {
                            url: "/parental-control",
                            templateUrl: "views/access-control.parental-control.main.html"
                        }
                    }, {
                        name: "user.accessControl.parentalControl.planning",
                        state: {
                            url: "/planning",
                            templateUrl: "views/access-control.parental-control.planning.html",
                            controller: "ParentalControllerPlanning"
                        }
                    }, {
                        name: "user.accessControl.parentalControl.filtering",
                        state: {
                            url: "/filtering",
                            templateUrl: "views/access-control.parental-control.filtering.html",
                            controller: "ParentalControllerFiltering"
                        }
                    }, {
                        name: "user.accessControl.parentalControl.control",
                        state: {
                            url: "/control",
                            templateUrl: "views/access-control.parental-control.profile.html",
                            controller: "ParentalControllerProfiles"
                        }
                    }, {
                        name: "user.accessControl.portForwarding",
                        state: {
                            url: "/port-forwarding",
                            templateUrl: "views/access-control.port-forwarding.main.html",
                            data: {
                                module: "portForwarding"
                            }
                        }
                    }, {
                        name: "user.accessControl.portForwarding.addRule",
                        state: {
                            url: "/add-rule",
                            templateUrl: "views/access-control.port-forwarding.html",
                            controller: "PortForwardingController"
                        }
                    }, {
                        name: "user.accessControl.portForwarding.gamesApp",
                        state: {
                            url: "/games-app",
                            templateUrl: "views/access-control.port-forwarding.games-app.html",
                            controller: "GamesController"
                        }
                    }, {
                        name: "user.accessControl.portTriggering",
                        state: {
                            url: "/port-triggering",
                            templateUrl: "views/access-control.port-triggering.html",
                            controller: "PortTriggeringController",
                            data: {
                                module: "portTriggering"
                            }
                        }
                    }, {
                        name: "user.ethernetDevice",
                        state: {
                            url: "/device/:layer/:uid",
                            templateUrl: "views/ethernet-device.main.html",
                            controller: "EthernetDeviceMainController"
                        }
                    }, {
                        name: "user.ethernetDevice.deviceInfo",
                        state: {
                            url: "/device-info",
                            templateUrl: "views/ethernet-device.device-info.html",
                            controller: "EthernetDeviceController"
                        }
                    }, {
                        name: "user.ethernetDevice.dmz",
                        state: {
                            url: "/dmz",
                            templateUrl: "views/ethernet-device.dmz.html",
                            controller: "DMZController",
                            data: {
                                module: "dmz"
                            }
                        }
                    }, {
                        name: "user.ethernetDevice.portForwarding",
                        state: {
                            url: "/port-forwarding",
                            templateUrl: "views/ethernet-device.port-forwarding.main.html",
                            controller: "EthernetDevicePFMainController"
                        }
                    }, {
                        name: "user.ethernetDevice.portForwarding.addRule",
                        state: {
                            url: "/add-rule",
                            templateUrl: "views/access-control.port-forwarding.html",
                            controller: "PortForwardingController"
                        }
                    }, {
                        name: "user.ethernetDevice.portForwarding.gamesApp",
                        state: {
                            url: "/games-app",
                            templateUrl: "views/access-control.port-forwarding.games-app.html",
                            controller: "GamesController"
                        }
                    }, {
                        name: "user.ethernetDevice.firewall",
                        state: {
                            url: "/firewall",
                            templateUrl: "views/access-control.firewall.html",
                            controller: "FirewallController"
                        }
                    }, {
                        name: "user.ethernetDevice.parentalControl",
                        state: {
                            url: "/parental-control",
                            templateUrl: "views/access-control.parental-control.planning.html",
                            controller: "ParentalControllerPlanning"
                        }
                    }, {
                        name: "user.usbDevice",
                        state: {
                            url: "/usb-devices/:uid",
                            templateUrl: "views/usb-device.main.html",
                            controller: "UsbDeviceMainController"
                        }
                    }, {
                        name: "user.usbDevice.deviceInfo",
                        state: {
                            url: "/usb-devices-info/",
                            templateUrl: "views/usb-device.device-info.html",
                            controller: "UsbDeviceController"
                        }
                    }, {
                        name: "user.usbDevice.massStorage",
                        state: {
                            url: "/mass-storage/",
                            templateUrl: "views/mysagemcombox.mass-storage.html",
                            controller: "MassStorageController"
                        }
                    }, {
                        name: "user.mysagemcombox.route",
                        state: {
                            url: "/route",
                            templateUrl: "views/mysagemcombox.route.main.html",
                            data: {
                                module: "route"
                            }
                        }
                    }, {
                        name: "user.mysagemcombox.route.static",
                        state: {
                            url: "/static",
                            templateUrl: "views/mysagemcombox.route.static.html",
                            controller: "RouteStaticController"
                        }
                    }, {
                        name: "user.mysagemcombox.mymedia",
                        state: {
                            url: "/myMedia",
                            templateUrl: "views/my.media.html",
                            controller: "MyMediaController"
                        }
                    }, {
                        name: "user.scheduling",
                        state: {
                            url: "/scheduling/:scheduleType/:mode",
                            templateUrl: "views/scheduling.main.html",
                            controller: "SchedulingMainController"
                        }
                    }, {
                        name: "user.scheduling.control",
                        state: {
                            url: "/control",
                            templateUrl: "views/scheduling.control.html",
                            controller: "SchedulingController",
                            data: {
                                title: "wifiScheduleTitle"
                            }
                        }
                    }, {
                        name: "user.phonebook",
                        state: {
                            url: "/phonebook",
                            templateUrl: "views/phonebook.main.html"
                        }
                    }, {
                        name: "user.phonebook.contacts",
                        state: {
                            url: "/contacts",
                            templateUrl: "views/phonebook.contacts.html",
                            controller: "PhonebookContactsController"
                        }
                    }, {
                        name: "user.phonebook.callLog",
                        state: {
                            url: "/callLog",
                            templateUrl: "views/phonebook.call-log.html",
                            controller: "VoiceDeviceController"
                        }
                    }, {
                        name: "user.internetConnectivity",
                        state: {
                            url: "/internetConnectivity",
                            templateUrl: "views/internet-connectivity.main.html"
                        }
                    }, {
                        name: "user.internetConnectivity.ppp",
                        state: {
                            url: "/ppp",
                            templateUrl: "views/internet-connectivity.ppp.html",
                            controller: "PPPController"
                        }
                    }, {
                        name: "user.internetConnectivity.wan",
                        state: {
                            url: "/wan",
                            templateUrl: "views/internet-connectivity.wan.html",
                            controller: "WANController",
                            data: {
                                module: "internetConnectivityWanAdvanced"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.trafficSpeed",
                        state: {
                            url: "/trafficSpeed",
                            templateUrl: "views/internet-connectivity.traffic-speed.html",
                            controller: "TrafficSpeedController"
                        }
                    }, {
                        name: "user.internetConnectivity.3g",
                        state: {
                            url: "/3g",
                            templateUrl: "views/internet-connectivity.3g.html",
                            controller: "Backup3gController"
                        }
                    }, {
                        name: "user.internetConnectivity.basic",
                        state: {
                            url: "/basic",
                            templateUrl: "views/internet-connectivity.basic.html",
                            data: {
                                module: "internetConnectivityWanBasic"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.basic.ipv4",
                        state: {
                            url: "/ipv4",
                            templateUrl: "views/internet-connectivity.ipv4.html",
                            controller: "SimpleController",
                            data: {
                                module: "internetConnectivityWanBasic"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.ipv6",
                        state: {
                            url: "/ipv6",
                            templateUrl: "views/internet-connectivity.ipv6.html"
                        }
                    }, {
                        name: "user.internetConnectivity.docsis",
                        state: {
                            url: "/docsis",
                            "abstract": !0,
                            templateUrl: "views/internet-connectivity.docsis.main.html",
                            data: {
                                module: "docsis"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.docsis.configuration",
                        state: {
                            url: "/configuration",
                            controller: "MaintenanceResetController",
                            templateUrl: "views/mysagemcombox.device-info.configuration.html",
                            data: {
                                module: "docsis"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.docsis.networkparams",
                        state: {
                            url: "/network-parameters",
                            templateUrl: "views/mysagemcombox.device-info.docsis.html",
                            controller: "DeviceInformationController",
                            data: {
                                module: "docsis",
                                netparams: !0
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.docsis.rfparams",
                        state: {
                            url: "/rf-parameters",
                            templateUrl: "views/mysagemcombox.device-info.docsis.connection.html",
                            controller: "CableModemConnectionController",
                            data: {
                                module: "docsis"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.docsis.mta",
                        state: {
                            url: "/mta",
                            templateUrl: "views/sip-settings.settings.html",
                            controller: "SipSettingsController",
                            data: {
                                module: "docsis"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.basic.simpleIpv6",
                        state: {
                            url: "/simpleIpv6",
                            templateUrl: "views/internet-connectivity.ipv6Simple.html",
                            controller: "SimpleIPv6Controller",
                            data: {
                                module: "simpleIpv6"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.simpleIpv6",
                        state: {
                            url: "/simpleIPv6",
                            templateUrl: "views/internet-connectivity.ipv6Simple.html",
                            controller: "SimpleIPv6Controller",
                            data: {
                                module: "simpleIPv6Main"
                            }
                        }
                    }, {
                        name: "user.internetConnectivity.bridgemodeInternetPage",
                        state: {
                            url: "/bridgemode",
                            templateUrl: "views/mysagemcombox.bridge-mode.html",
                            controller: "BridgeModeController",
                            data: {
                                module: "bridgemodeInternetPage"
                            }
                        }
                    }, {
                        name: "user.sip",
                        state: {
                            url: "/sip-settings",
                            templateUrl: "views/sip-settings.main.html",
                            data: {
                                module: "sip"
                            }
                        }
                    }, {
                        name: "user.sip.telephones",
                        state: {
                            url: "/telephones-matrix",
                            templateUrl: "views/sip-telephones.matrix.html",
                            controller: "TelephonesMatrixController"
                        }
                    }, {
                        name: "user.sip.callsettings",
                        state: {
                            url: "/call-settings",
                            templateUrl: "views/sip-settings.call-settings.html",
                            controller: "CallBlockingController"
                        }
                    }, {
                        name: "user.sip.settings",
                        state: {
                            url: "/settings",
                            templateUrl: "views/sip-settings.settings.html",
                            controller: "SipSettingsController"
                        }
                    }, {
                        name: "user.dect",
                        state: {
                            url: "/dect",
                            templateUrl: "views/dect.main.html"
                        }
                    }, {
                        name: "user.dect.basic",
                        state: {
                            url: "/basic",
                            templateUrl: "views/dect.basic.html",
                            controller: "DectBasicController"
                        }
                    }, {
                        name: "user.dect.advanced",
                        state: {
                            url: "/advanced",
                            templateUrl: "views/dect.advanced.html",
                            controller: "DectAdvancedController",
                            data: {
                                module: "dectAdvanced"
                            }
                        }
                    }, {
                        name: "user.dectHandset",
                        state: {
                            url: "/dectHandset/:uid",
                            templateUrl: "views/dect.handset.main.html",
                            controller: "DectHandsetMainController"
                        }
                    }, {
                        name: "user.dectHandset.handset",
                        state: {
                            url: "/handset",
                            templateUrl: "views/dect.handset.handset.html",
                            controller: "DectHandsetController"
                        }
                    }, {
                        name: "user.dectHandset.advanced",
                        state: {
                            url: "/advanced",
                            templateUrl: "views/dect.handset.advanced.html",
                            controller: "DectHandsetController"
                        }
                    }],
                    admin: [{
                        name: "admin",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.admin
                            }
                        }
                    }],
                    onu: [{
                        name: "onu",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.admin
                            }
                        }
                    }],
                    internal: [{
                        name: "internal",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.internal
                            }
                        }
                    }],
                    poweruser: [{
                        name: "poweruser",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.internal
                            }
                        }
                    }],
                    mso: [{
                        name: "mso",
                        state: {
                            "abstract": !0,
                            templateUrl: "views/base.html",
                            data: {
                                access: a.mso
                            }
                        }
                    }]
                }
            }
        },
        replaceXpaths: {
            adminAdvanced: {
                vcivpi: "",
                dns1Static: "Device/Managers/NetworkData/DNS/WAN/IPv4/DNS1",
                dns2Static: "Device/Managers/NetworkData/DNS/WAN/IPv4/DNS2",
                internetConnectivity: {
                    ipv6: {
                        enable: "Device/IP/IPv6Enable"
                    }
                }
            },
            forbiddenIps: {
                ips: {
                    upnpHost: "",
                    quantennaBootIpLocal: "",
                    quantennaBootIPRemote: "",
                    quantennaMngtIPLocal: "",
                    quantennaMngtIPRemote: ""
                }
            },
            main: {
                cacheable: {
                    quantenna: {
                        BootIPLocal: "",
                        BootIPRemote: "",
                        InterfacePhy: "",
                        MngtIPRemote: ""
                    }
                }
            },
            ethernet: {
                port1: {
                    connectionSpeed: "Device/Ethernet/Interfaces/Interface[@uid='1']/CurrentBitRate",
                    duplexMode: "Device/Ethernet/Interfaces/Interface[@uid='1']/DuplexMode",
                    currentBitRate: "Device/Ethernet/Interfaces/Interface[@uid='1']/CurrentBitRate"
                },
                port2: {
                    connectionSpeed: "Device/Ethernet/Interfaces/Interface[@uid='2']/CurrentBitRate",
                    duplexMode: "Device/Ethernet/Interfaces/Interface[@uid='2']/DuplexMode",
                    currentBitRate: "Device/Ethernet/Interfaces/Interface[@uid='2']/CurrentBitRate"
                },
                port3: {
                    connectionSpeed: "Device/Ethernet/Interfaces/Interface[@uid='3']/CurrentBitRate",
                    duplexMode: "Device/Ethernet/Interfaces/Interface[@uid='3']/DuplexMode",
                    currentBitRate: "Device/Ethernet/Interfaces/Interface[@uid='3']/CurrentBitRate"
                },
                port4: {
                    connectionSpeed: "Device/Ethernet/Interfaces/Interface[@uid='4']/CurrentBitRate",
                    duplexMode: "Device/Ethernet/Interfaces/Interface[@uid='4']/DuplexMode",
                    currentBitRate: "Device/Ethernet/Interfaces/Interface[@uid='4']/CurrentBitRate"
                }
            },
            mySagemcomBox: {
                dns: {
                    server: "Device/Managers/NetworkData/DNS/LAN/IPv4/DNS1",
                    server2: "Device/Managers/NetworkData/DNS/LAN/IPv4/DNS2",
                    dynamic: "Device/DHCPv4/Server/Pools/Pool[Alias='DEFAULT_POOL']/DNSServers"
                },
                deviceInfo: {
                    publicIpv4: 'Device/IP/Interfaces/Interface[Alias="IP_DATA"]/IPv4Addresses/IPv4Address[Alias="IP_DATA_ADDRESS"]/IPAddress',
                    defaultGateway: 'Device/IP/Interfaces/Interface[Alias="IP_DATA"]/IPv4Addresses/IPv4Address/IPGateway',
                    publicSubnetMask: 'Device/IP/Interfaces/Interface[Alias="IP_DATA"]/IPv4Addresses/IPv4Address[Alias="IP_DATA_ADDRESS"]/SubnetMask',
                    localEthernetMac: 'Device/Ethernet/Links/Link[Alias="ETHLNK_BR_LAN"]/MACAddress',
                    wanMacAddress: 'Device/Docsis/Interfaces/Interface[Alias="EROUTER"]/MACAddress',
                    globalLinkIpv6: "Device/Managers/IPv6/WANAddress",
                    defaultLinkIpv6: "Device/Managers/IPv6/DefaultGateway",
                    mobileMode: "",
                    mobileStatus: "",
                    operator: "",
                    imei: "",
                    datapumpVersion: "",
                    xdsl: {
                        linkEncapsulation: "",
                        connectionTimeDsl: "",
                        profile: "",
                        lineEncoding: "",
                        linkStatus: "",
                        standard: "",
                        status: "",
                        numeric: {
                            actualRateDown: "",
                            actualRateUp: "",
                            inp: "",
                            inpus: "",
                            interLeaveDelay: "",
                            interLeaveDelayus: "",
                            interLeaveDepth: "",
                            interLeaveDepthus: "",
                            dataPath: "",
                            dataPathus: "",
                            attenuationDown: "",
                            attenuationDownPerBand: "",
                            maximumRateDown: "",
                            noiseMarginDown: "",
                            powerDown: "",
                            lossOfSignal: "",
                            lossOfSignalus: "",
                            attenuationUp: "",
                            attenuationUpPerBand: "",
                            maximumRateUp: "",
                            noiseMarginUp: "",
                            powerUp: ""
                        }
                    },
                    xdsl2: {
                        linkEncapsulation: "",
                        connectionTimeDsl: "",
                        datapumpVersion: "",
                        lineEncoding: "",
                        profile: "",
                        linkStatus: "",
                        standard: "",
                        status: "",
                        numeric: {
                            actualRateDown: "",
                            actualRateUp: "",
                            inp: "",
                            inpus: "",
                            interLeaveDelay: "",
                            interLeaveDelayus: "",
                            interLeaveDepth: "",
                            interLeaveDepthus: "",
                            dataPath: "",
                            dataPathus: "",
                            attenuationDown: "",
                            attenuationDownPerBand: "",
                            maximumRateDown: "",
                            noiseMarginDown: "",
                            powerDown: "",
                            lossOfSignal: "",
                            lossOfSignalus: "",
                            attenuationUp: "",
                            attenuationUpPerBand: "",
                            maximumRateUp: "",
                            noiseMarginUp: "",
                            powerUp: ""
                        }
                    }
                },
                advancedOptions: {
                    wanBlockingEnable: "Device/Firewall/RespondToPing"
                },
                lanIPv6: {
                    enableAutoIPv6Assignment: 'Device/RouterAdvertisement/InterfaceSettings/InterfaceSetting[Alias="RA_BR_LAN"]/AdvManagedFlag',
                    enableAutoIPv6Assignment1: 'Device/RouterAdvertisement/InterfaceSettings/InterfaceSetting[Alias="RA_BR_LAN"]/AdvOtherConfigFlag'
                },
                networkConfiguration: {
                    atmLinks: ""
                }
            },
            internetConnectivity: {
                ipv6: {
                    delegatedprefix: 'Device/IP/Interfaces/Interface[Alias="IP_DATA"]/IPv6Prefixes/IPv6Prefix[Alias="IAPD_2"]/Prefix',
                    wanIPv6: "Device/Managers/IPv6/WANAddress",
                    dns1Static: "Device/Managers/NetworkData/DNS/WAN/IPv6/DNS1",
                    dns2Static: "Device/Managers/NetworkData/DNS/WAN/IPv6/DNS2"
                },
                wan: {
                    atm: {
                        availableATMLinks: ""
                    },
                    dslWanInterfaces: {
                        standardUsed: ""
                    }
                },
                qos: {
                    interfaces: {
                        atmLinks: ""
                    }
                },
                backup3g: {
                    cellular: {
                        statusInfo: {
                            mobileOperator: ""
                        }
                    }
                }
            },
            stats: {
                atm: "",
                wan: {
                    dslStatus: ""
                },
                xdsl: {
                    dslDownstream: "",
                    dslUpstream: "",
                    linkEncapsulation: "",
                    connectionTimeDsl: "",
                    lineEncoding: "",
                    linkStatus: "",
                    standard: "",
                    status: "",
                    erroredSeconds: "",
                    reSynchronisations: "",
                    severelyErroredSecs: "",
                    numeric: {
                        lossOfFraming: "",
                        actualRateDown: "",
                        XTUCCRCErrors: "",
                        XTUCFECErrors: "",
                        XTURCRCErrors: "",
                        XTURFECErrors: "",
                        actualRateUp: "",
                        actualRateDown2: "",
                        actualRateUp2: "",
                        bytesReceived: "",
                        bytesSent: "",
                        packetsReceived: "",
                        packetsSent: ""
                    }
                }
            },
            management: {
                mobileLinks: {
                    apple: "",
                    google: ""
                }
            },
            rpc: {
                firmwareUpgrade: "Device/gen3890v3"
            },
            wifi: {
                general: {
                    possibleChannels: 'Device/WiFi/Radios/Radio[Alias="#RADIO#"]/ChannelsInUse'
                }
            }
        }
    }
};
"undefined" != typeof module && module.exports ? exports.profile = profile : $.configs = $.extend($.configs, profile);
var currentVersion = "4.104.1";
if ("undefined" != typeof module && module.exports)
    exports.allProfiles = ["myrepublic", "optus", "dtag_gpon", "dtag_gfast", "dtag_xdsl", "bell", "bthome", "sunrise", "telstra", "maelstrom", "tim", "demo", "charter", "charter_5280", "windstream", "sonne", "oneboxpt", "telus", "teo", "talktalk", "myrepublic_australia", "siminn", "comhem", "maelstrom_cable", "bouygues_extender", "tlc", "get", "ssc", "proximus_f5380", "tim_v2", "demo_gpon", "telia_eth", "telia_eth_debug", "tim_f5360", "oi_f5655", "eole", "telia_air", "telia_air_debug", "verizon", "orange_f5688t", "masmovil_gpon", "totalplay", "clarop", "delta", "tmobile_poland_f5370", "tmobile_poland_f5352", "go_malta_f5370", "magyar", "ta_gpon", "bbn", "dgf_f5366s", "toob_f5366se", "eir_f5366s", "euskaltel", "masmovil_gpon_F5657", "nos_f5657", "cellcom_f5657", "tmpl_f5657", "masmovil_f5366se", "kpn_f5359", "sunrise_f3890ax", "tim_f5370", "claroarg_f5657", "mediacom_f3896um", "dna_f3890v3", "claro_f5657", "masmovil_f5670", "tim_f5657", "tdc_f5375", "clarodom_f5657", "vero_f5657", "malta_f5366s", "proximus_hgw4", "njj_f5688", "njj_f5688_debug", "euskaltel_f5657", "mbo_f5670", "tlc_f5670", "demo_f5280", "xswan", "comhem_f5359", "canal_f5670", "une_f3890v3", "ssc_f3896um"],
    exports.cables = ["bbn", "clarop", "comhem", "delta", "get", "magyar", "maelstrom_cable", "ssc", "tlc", "euskaltel", "sunrise_f3890ax", "mediacom_f3896um", "dna_f3890v3", "une_f3890v3", "ssc_f3896um"],
    exports.availableProfiles = ["comhem"],
    exports.currentVersion = currentVersion;
else {
    var selectedProfile = "comhem";
    $.config = $.configs[selectedProfile];
    var subProfile = null;
    if ($.config.subProfiles && $.config.subProfiles.length > 0 && $.each($.config.subProfiles, function(a, b) {
        return $.configs[b.name] && $.isFunction(b.condition) && b.condition() ? (console.log("profile activated: %c" + b.name, "background:green;color:#fff"),
        subProfile = $.configs[b.name],
        selectedProfile = b.name,
        !1) : void 0
    }),
    subProfile ? ($.config = subProfile,
    $.config.isSubProfile = !0) : delete $.config.subProfile,
    $.config.countries = $.configs.countries,
    delete $.configs,
    delete $.xmo.getModel,
    !$.isEmptyObject($.config.globals))
        for (var x in $.config.globals)
            $.globals[x] = $.config.globals[x];
    !function() {
        var a = $.util.getModuleConfig("forcefirstPassChange.users", null);
        a && $.each(a, function(b, c) {
            if (b && c) {
                var d = [];
                $.each(c, function(a, b) {
                    d.push($.util.md5(b))
                }),
                a[b] = d
            }
        })
    }(),
    $.isEmptyObject($.config.replaceXpaths) || $.util._replaceXpathRecursive($.config.replaceXpaths, $.xpaths),
    $.config.title && (document.title = $.config.title),
    $.util.hasFeature("dtagXdsl") && (document.title = "F@st5352 VRX517 B" === document.title ? "Speedport Plus Bonding" : "Speedport Plus");
    var restApi = $.util.getModuleConfig("restApi", !1);
    restApi !== !1 && ($.restApi = restApi)
}
