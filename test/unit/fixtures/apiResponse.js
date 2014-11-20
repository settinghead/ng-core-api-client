/**
 * Created by rodrigopavezi on 10/17/14.
 */
rvFixtures.api =
{
    "result": true,
    "kind": "discovery#restDescription",
    "etag": "\"9mnLCPwbyZOHH18t8ExzO2gqgTk/T5U_Suhw9Dp716kKhlH6L4xM0do\"",
    "discoveryVersion": "v1",
    "id": "core:v0",
    "name": "core",
    "version": "v0",
    "title": "Rise Core API (experimental)",
    "description": "Rise Core API (experimental)",
    "icons": {
        "x16": "http://www.google.com/images/icons/product/search-16.gif",
        "x32": "http://www.google.com/images/icons/product/search-32.gif"
    },
    "protocol": "rest",
    "baseUrl": "https://rvaserver2.appspot.com/_ah/api/core/v0/",
    "basePath": "/_ah/api/core/v0/",
    "rootUrl": "https://rvaserver2.appspot.com/_ah/api/",
    "servicePath": "core/v0/",
    "batchPath": "batch",
    "parameters": {
        "alt": {
            "type": "string",
            "description": "Data format for the response.",
            "default": "json",
            "enum": [
                "json"
            ],
            "enumDescriptions": [
                "Responses with Content-Type of application/json"
            ],
            "location": "query"
        },
        "fields": {
            "type": "string",
            "description": "Selector specifying which fields to include in a partial response.",
            "location": "query"
        },
        "key": {
            "type": "string",
            "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.",
            "location": "query"
        },
        "oauth_token": {
            "type": "string",
            "description": "OAuth 2.0 token for the current user.",
            "location": "query"
        },
        "prettyPrint": {
            "type": "boolean",
            "description": "Returns response with indentations and line breaks.",
            "default": "true",
            "location": "query"
        },
        "quotaUser": {
            "type": "string",
            "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.",
            "location": "query"
        },
        "userIp": {
            "type": "string",
            "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits.",
            "location": "query"
        }
    },
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/userinfo.email": {
                    "description": "View your email address"
                }
            }
        }
    },
    "schemas": {
        "APIResponse_CompanyListWrapper": {
            "id": "APIResponse_CompanyListWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "CompanyListWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "CompanyListWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_CompanyWrapper": {
            "id": "APIResponse_CompanyWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "CompanyWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "CompanyWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_CountryWrapper": {
            "id": "APIResponse_CountryWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "CountryWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "CountryWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_DisplayListWrapper": {
            "id": "APIResponse_DisplayListWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "DisplayListWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "DisplayListWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_DisplayWrapper": {
            "id": "APIResponse_DisplayWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "DisplayWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "DisplayWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_PresentationListWrapper": {
            "id": "APIResponse_PresentationListWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "PresentationListWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "PresentationListWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_PresentationWrapper": {
            "id": "APIResponse_PresentationWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "PresentationWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "PresentationWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_ScheduleWrapper": {
            "id": "APIResponse_ScheduleWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "ScheduleWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "ScheduleWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_String": {
            "id": "APIResponse_String",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "type": "string"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_SystemMessageWrapper": {
            "id": "APIResponse_SystemMessageWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "SystemMessageWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "SystemMessageWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_TimeZoneWrapper": {
            "id": "APIResponse_TimeZoneWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "TimeZoneWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "TimeZoneWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "APIResponse_UserWrapper": {
            "id": "APIResponse_UserWrapper",
            "type": "object",
            "properties": {
                "cursor": {
                    "type": "string"
                },
                "item": {
                    "$ref": "UserWrapper"
                },
                "items": {
                    "type": "array",
                    "items": {
                        "$ref": "UserWrapper"
                    }
                },
                "nextPageToken": {
                    "type": "string"
                }
            }
        },
        "AlertSettingsWrapper": {
            "id": "AlertSettingsWrapper",
            "type": "object",
            "properties": {
                "allowedCategories": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "allowedCertainties": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "allowedEventCodes": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "allowedHandlingCodes": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "allowedSenders": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "allowedSeverities": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "allowedStatuses": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "allowedUrgencies": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "defaultExpiry": {
                    "type": "integer",
                    "format": "int32"
                },
                "distribution": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "enabled": {
                    "type": "boolean"
                },
                "password": {
                    "type": "string"
                },
                "presentationId": {
                    "type": "string"
                },
                "textFields": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "userName": {
                    "type": "string"
                }
            }
        },
        "CompanyListWrapper": {
            "id": "CompanyListWrapper",
            "type": "object",
            "properties": {
                "address": {
                    "type": "string"
                },
                "changeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "changedBy": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "companyStatus": {
                    "type": "integer",
                    "format": "int32"
                },
                "companyStatusChangeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "country": {
                    "type": "string"
                },
                "fax": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "notificationEmails": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "parentId": {
                    "type": "string"
                },
                "postalCode": {
                    "type": "string"
                },
                "province": {
                    "type": "string"
                },
                "sellerId": {
                    "type": "string"
                },
                "street": {
                    "type": "string"
                },
                "telephone": {
                    "type": "string"
                },
                "timeZone": {
                    "type": "string"
                },
                "unit": {
                    "type": "string"
                }
            }
        },
        "CompanyWrapper": {
            "id": "CompanyWrapper",
            "type": "object",
            "properties": {
                "adsEarn": {
                    "type": "boolean"
                },
                "adsInterested": {
                    "type": "boolean"
                },
                "alertKey": {
                    "type": "string"
                },
                "alertSettings": {
                    "$ref": "AlertSettingsWrapper"
                },
                "authKey": {
                    "type": "string"
                },
                "changeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "changedBy": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "claimId": {
                    "type": "string"
                },
                "companyStatus": {
                    "type": "integer",
                    "format": "int32"
                },
                "companyStatusChangeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "companyType": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                },
                "creationDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "fax": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "latitude": {
                    "type": "number",
                    "format": "double"
                },
                "longitude": {
                    "type": "number",
                    "format": "double"
                },
                "mailSyncEnabled": {
                    "type": "boolean"
                },
                "marketSegments": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "name": {
                    "type": "string"
                },
                "notificationEmails": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "parentId": {
                    "type": "string"
                },
                "parentSettings": {
                    "$ref": "JsonMap"
                },
                "postalCode": {
                    "type": "string"
                },
                "province": {
                    "type": "string"
                },
                "sellerId": {
                    "type": "string"
                },
                "servicesProvided": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "settings": {
                    "$ref": "JsonMap"
                },
                "street": {
                    "type": "string"
                },
                "targetGroups": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "telephone": {
                    "type": "string"
                },
                "timeZoneOffset": {
                    "type": "integer",
                    "format": "int32"
                },
                "unit": {
                    "type": "string"
                },
                "viewsPerDisplay": {
                    "type": "string"
                }
            }
        },
        "CountryWrapper": {
            "id": "CountryWrapper",
            "type": "object",
            "properties": {
                "code": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "states": {
                    "type": "array",
                    "items": {
                        "$ref": "StateProvinceWrapper"
                    }
                }
            }
        },
        "DisplayListWrapper": {
            "id": "DisplayListWrapper",
            "type": "object",
            "properties": {
                "addressDescription": {
                    "type": "string"
                },
                "blockExpiry": {
                    "type": "string",
                    "format": "date-time"
                },
                "browserUpgradeMode": {
                    "type": "integer",
                    "format": "int32"
                },
                "browserVersion": {
                    "type": "string"
                },
                "cacheVersion": {
                    "type": "string"
                },
                "changeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "changedBy": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "companyId": {
                    "type": "string"
                },
                "companyName": {
                    "type": "string"
                },
                "connected": {
                    "type": "boolean"
                },
                "country": {
                    "type": "string"
                },
                "fullAddress": {
                    "type": "string"
                },
                "height": {
                    "type": "integer",
                    "format": "int32"
                },
                "id": {
                    "type": "string"
                },
                "installerVersion": {
                    "type": "string"
                },
                "lastActivityDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "lastConnectionDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "latitude": {
                    "type": "number",
                    "format": "double"
                },
                "longitude": {
                    "type": "number",
                    "format": "double"
                },
                "monitoringEnabled": {
                    "type": "boolean"
                },
                "name": {
                    "type": "string"
                },
                "os": {
                    "type": "string"
                },
                "playerStatus": {
                    "type": "integer",
                    "format": "int32"
                },
                "postalCode": {
                    "type": "string"
                },
                "province": {
                    "type": "string"
                },
                "restartEnabled": {
                    "type": "boolean"
                },
                "restartTime": {
                    "type": "string"
                },
                "status": {
                    "type": "integer",
                    "format": "int32"
                },
                "street": {
                    "type": "string"
                },
                "timeZoneOffset": {
                    "type": "integer",
                    "format": "int32"
                },
                "unit": {
                    "type": "string"
                },
                "useCompanyAddress": {
                    "type": "boolean"
                },
                "width": {
                    "type": "integer",
                    "format": "int32"
                }
            }
        },
        "DisplayWrapper": {
            "id": "DisplayWrapper",
            "type": "object",
            "properties": {
                "addressDescription": {
                    "type": "string"
                },
                "browserUpgradeMode": {
                    "type": "integer",
                    "format": "int32"
                },
                "changeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "changedBy": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "companyId": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                },
                "creationDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "height": {
                    "type": "integer",
                    "format": "int32"
                },
                "id": {
                    "type": "string"
                },
                "latitude": {
                    "type": "number",
                    "format": "double"
                },
                "longitude": {
                    "type": "number",
                    "format": "double"
                },
                "monitoringEnabled": {
                    "type": "boolean"
                },
                "name": {
                    "type": "string"
                },
                "postalCode": {
                    "type": "string"
                },
                "province": {
                    "type": "string"
                },
                "restartEnabled": {
                    "type": "boolean"
                },
                "restartTime": {
                    "type": "string"
                },
                "status": {
                    "type": "integer",
                    "format": "int32"
                },
                "street": {
                    "type": "string"
                },
                "timeZoneOffset": {
                    "type": "integer",
                    "format": "int32"
                },
                "unit": {
                    "type": "string"
                },
                "useCompanyAddress": {
                    "type": "boolean"
                },
                "width": {
                    "type": "integer",
                    "format": "int32"
                }
            }
        },
        "DistributionItemWrapper": {
            "id": "DistributionItemWrapper",
            "type": "object",
            "properties": {
                "displayIds": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "itemId": {
                    "type": "string"
                }
            }
        },
        "JsonMap": {
            "id": "JsonMap",
            "type": "object"
        },
        "PresentationListWrapper": {
            "id": "PresentationListWrapper",
            "type": "object",
            "properties": {
                "changeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "changedBy": {
                    "type": "string"
                },
                "companyId": {
                    "type": "string"
                },
                "creationDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "id": {
                    "type": "string"
                },
                "isTemplate": {
                    "type": "boolean"
                },
                "name": {
                    "type": "string"
                },
                "publish": {
                    "type": "integer",
                    "format": "int32"
                },
                "revisionStatus": {
                    "type": "integer",
                    "format": "int32"
                }
            }
        },
        "PresentationWrapper": {
            "id": "PresentationWrapper",
            "type": "object",
            "properties": {
                "changeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "changedBy": {
                    "type": "string"
                },
                "companyId": {
                    "type": "string"
                },
                "creationDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "distribution": {
                    "type": "array",
                    "items": {
                        "$ref": "DistributionItemWrapper"
                    }
                },
                "embeddedIds": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "id": {
                    "type": "string"
                },
                "isTemplate": {
                    "type": "boolean"
                },
                "layout": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "publish": {
                    "type": "integer",
                    "format": "int32"
                },
                "revisionStatus": {
                    "type": "integer",
                    "format": "int32"
                }
            }
        },
        "ScheduleItemWrapper": {
            "id": "ScheduleItemWrapper",
            "type": "object",
            "properties": {
                "distributeToAll": {
                    "type": "boolean"
                },
                "distribution": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "duration": {
                    "type": "integer",
                    "format": "int32"
                },
                "endDate": {
                    "type": "string"
                },
                "endTime": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "objectReference": {
                    "type": "string"
                },
                "recurrenceAbsolute": {
                    "type": "boolean"
                },
                "recurrenceDayOfMonth": {
                    "type": "integer",
                    "format": "int32"
                },
                "recurrenceDayOfWeek": {
                    "type": "integer",
                    "format": "int32"
                },
                "recurrenceDaysOfWeek": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "recurrenceFrequency": {
                    "type": "integer",
                    "format": "int32"
                },
                "recurrenceMonthOfYear": {
                    "type": "integer",
                    "format": "int32"
                },
                "recurrenceType": {
                    "type": "string"
                },
                "recurrenceWeekOfMonth": {
                    "type": "integer",
                    "format": "int32"
                },
                "startDate": {
                    "type": "string"
                },
                "startTime": {
                    "type": "string"
                },
                "timeDefined": {
                    "type": "boolean"
                },
                "type": {
                    "type": "string"
                }
            }
        },
        "ScheduleWrapper": {
            "id": "ScheduleWrapper",
            "type": "object",
            "properties": {
                "changeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "changedBy": {
                    "type": "string"
                },
                "companyId": {
                    "type": "string"
                },
                "content": {
                    "type": "array",
                    "items": {
                        "$ref": "ScheduleItemWrapper"
                    }
                },
                "creationDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "distributeToAll": {
                    "type": "boolean"
                },
                "distribution": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "endDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "endTime": {
                    "type": "string",
                    "format": "date-time"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "presentationIds": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "recurrenceAbsolute": {
                    "type": "boolean"
                },
                "recurrenceDayOfMonth": {
                    "type": "integer",
                    "format": "int32"
                },
                "recurrenceDayOfWeek": {
                    "type": "integer",
                    "format": "int32"
                },
                "recurrenceDaysOfWeek": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "recurrenceFrequency": {
                    "type": "integer",
                    "format": "int32"
                },
                "recurrenceMonthOfYear": {
                    "type": "integer",
                    "format": "int32"
                },
                "recurrenceType": {
                    "type": "string"
                },
                "recurrenceWeekOfMonth": {
                    "type": "integer",
                    "format": "int32"
                },
                "startDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "startTime": {
                    "type": "string",
                    "format": "date-time"
                },
                "timeDefined": {
                    "type": "boolean"
                }
            }
        },
        "StateProvinceWrapper": {
            "id": "StateProvinceWrapper",
            "type": "object",
            "properties": {
                "code": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                }
            }
        },
        "SystemMessageWrapper": {
            "id": "SystemMessageWrapper",
            "type": "object",
            "properties": {
                "endDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "startDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "text": {
                    "type": "string"
                }
            }
        },
        "TimeZoneWrapper": {
            "id": "TimeZoneWrapper",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "offset": {
                    "type": "integer",
                    "format": "int32"
                }
            }
        },
        "UserWrapper": {
            "id": "UserWrapper",
            "type": "object",
            "properties": {
                "changeDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "changedBy": {
                    "type": "string"
                },
                "companyId": {
                    "type": "string"
                },
                "creationDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "customerId": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "firstName": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "lastLogin": {
                    "type": "string",
                    "format": "date-time"
                },
                "lastName": {
                    "type": "string"
                },
                "mailSyncEnabled": {
                    "type": "boolean"
                },
                "roles": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "showTutorial": {
                    "type": "boolean"
                },
                "status": {
                    "type": "integer",
                    "format": "int32"
                },
                "telephone": {
                    "type": "string"
                },
                "termsAcceptanceDate": {
                    "type": "string",
                    "format": "date-time"
                },
                "username": {
                    "type": "string"
                }
            }
        }
    },
    "resources": {
        "company": {
            "methods": {
                "add": {
                    "id": "core.company.add",
                    "path": "company",
                    "httpMethod": "PUT",
                    "parameters": {
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "parentId": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "data",
                        "parentId"
                    ],
                    "response": {
                        "$ref": "APIResponse_CompanyWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "delete": {
                    "id": "core.company.delete",
                    "path": "company",
                    "httpMethod": "DELETE",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_CompanyWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "get": {
                    "id": "core.company.get",
                    "path": "company",
                    "httpMethod": "GET",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "response": {
                        "$ref": "APIResponse_CompanyWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "list": {
                    "id": "core.company.list",
                    "path": "companies",
                    "httpMethod": "GET",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "location": "query"
                        },
                        "count": {
                            "type": "string",
                            "location": "query"
                        },
                        "cursor": {
                            "type": "string",
                            "location": "query"
                        },
                        "search": {
                            "type": "string",
                            "location": "query"
                        },
                        "sort": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "response": {
                        "$ref": "APIResponse_CompanyListWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "lookup": {
                    "id": "core.company.lookup",
                    "path": "company/lookup",
                    "httpMethod": "GET",
                    "parameters": {
                        "authKey": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "authKey"
                    ],
                    "response": {
                        "$ref": "APIResponse_CompanyWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "move": {
                    "id": "core.company.move",
                    "path": "company/move",
                    "httpMethod": "POST",
                    "parameters": {
                        "authKey": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "newParentId": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "authKey"
                    ],
                    "response": {
                        "$ref": "APIResponse_String"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "regenerateField": {
                    "id": "core.company.regenerateField",
                    "path": "company/regenerate",
                    "httpMethod": "POST",
                    "parameters": {
                        "fieldName": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "id": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "fieldName"
                    ],
                    "response": {
                        "$ref": "APIResponse_String"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "update": {
                    "id": "core.company.update",
                    "path": "company",
                    "httpMethod": "POST",
                    "parameters": {
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "data",
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_CompanyWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                }
            }
        },
        "country": {
            "methods": {
                "list": {
                    "id": "core.country.list",
                    "path": "countries",
                    "httpMethod": "GET",
                    "response": {
                        "$ref": "APIResponse_CountryWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                }
            }
        },
        "display": {
            "methods": {
                "add": {
                    "id": "core.display.add",
                    "path": "display",
                    "httpMethod": "PUT",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "companyId",
                        "data"
                    ],
                    "response": {
                        "$ref": "APIResponse_DisplayWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "delete": {
                    "id": "core.display.delete",
                    "path": "display",
                    "httpMethod": "DELETE",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_DisplayWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "get": {
                    "id": "core.display.get",
                    "path": "display",
                    "httpMethod": "GET",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_DisplayWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "list": {
                    "id": "core.display.list",
                    "path": "displays",
                    "httpMethod": "GET",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "location": "query"
                        },
                        "count": {
                            "type": "string",
                            "location": "query"
                        },
                        "cursor": {
                            "type": "string",
                            "location": "query"
                        },
                        "search": {
                            "type": "string",
                            "location": "query"
                        },
                        "sort": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "response": {
                        "$ref": "APIResponse_DisplayListWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "update": {
                    "id": "core.display.update",
                    "path": "display",
                    "httpMethod": "POST",
                    "parameters": {
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "data",
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_DisplayWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                }
            }
        },
        "presentation": {
            "methods": {
                "add": {
                    "id": "core.presentation.add",
                    "path": "presentation",
                    "httpMethod": "PUT",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "companyId",
                        "data"
                    ],
                    "response": {
                        "$ref": "APIResponse_PresentationWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "delete": {
                    "id": "core.presentation.delete",
                    "path": "presentation",
                    "httpMethod": "DELETE",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_PresentationWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "get": {
                    "id": "core.presentation.get",
                    "path": "presentation",
                    "httpMethod": "GET",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_PresentationWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "list": {
                    "id": "core.presentation.list",
                    "path": "presentations",
                    "httpMethod": "GET",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "location": "query"
                        },
                        "count": {
                            "type": "string",
                            "location": "query"
                        },
                        "cursor": {
                            "type": "string",
                            "location": "query"
                        },
                        "search": {
                            "type": "string",
                            "location": "query"
                        },
                        "sort": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "response": {
                        "$ref": "APIResponse_PresentationListWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "publish": {
                    "id": "core.presentation.publish",
                    "path": "presentation/publish",
                    "httpMethod": "POST",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_String"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "restore": {
                    "id": "core.presentation.restore",
                    "path": "presentation/restore",
                    "httpMethod": "POST",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_PresentationWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "update": {
                    "id": "core.presentation.update",
                    "path": "presentation",
                    "httpMethod": "POST",
                    "parameters": {
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "data",
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_PresentationWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                }
            }
        },
        "schedule": {
            "methods": {
                "add": {
                    "id": "core.schedule.add",
                    "path": "schedule",
                    "httpMethod": "PUT",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "companyId",
                        "data"
                    ],
                    "response": {
                        "$ref": "APIResponse_ScheduleWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "delete": {
                    "id": "core.schedule.delete",
                    "path": "schedule",
                    "httpMethod": "DELETE",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_ScheduleWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "get": {
                    "id": "core.schedule.get",
                    "path": "schedule",
                    "httpMethod": "GET",
                    "parameters": {
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_ScheduleWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "list": {
                    "id": "core.schedule.list",
                    "path": "schedules",
                    "httpMethod": "GET",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "location": "query"
                        },
                        "count": {
                            "type": "string",
                            "location": "query"
                        },
                        "cursor": {
                            "type": "string",
                            "location": "query"
                        },
                        "search": {
                            "type": "string",
                            "location": "query"
                        },
                        "sort": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "response": {
                        "$ref": "APIResponse_ScheduleWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "update": {
                    "id": "core.schedule.update",
                    "path": "schedule",
                    "httpMethod": "POST",
                    "parameters": {
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "id": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "data",
                        "id"
                    ],
                    "response": {
                        "$ref": "APIResponse_ScheduleWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                }
            }
        },
        "systemmessage": {
            "methods": {
                "list": {
                    "id": "core.systemmessage.list",
                    "path": "systemmessages",
                    "httpMethod": "GET",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "response": {
                        "$ref": "APIResponse_SystemMessageWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                }
            }
        },
        "template": {
            "methods": {
                "list": {
                    "id": "core.template.list",
                    "path": "templates",
                    "httpMethod": "GET",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "location": "query"
                        },
                        "count": {
                            "type": "string",
                            "location": "query"
                        },
                        "cursor": {
                            "type": "string",
                            "location": "query"
                        },
                        "search": {
                            "type": "string",
                            "location": "query"
                        },
                        "sort": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "response": {
                        "$ref": "APIResponse_PresentationListWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                }
            }
        },
        "timezone": {
            "methods": {
                "list": {
                    "id": "core.timezone.list",
                    "path": "timezones",
                    "httpMethod": "GET",
                    "response": {
                        "$ref": "APIResponse_TimeZoneWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                }
            }
        },
        "user": {
            "methods": {
                "add": {
                    "id": "core.user.add",
                    "path": "user",
                    "httpMethod": "PUT",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "username": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "companyId",
                        "data",
                        "username"
                    ],
                    "response": {
                        "$ref": "APIResponse_UserWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "delete": {
                    "id": "core.user.delete",
                    "path": "user",
                    "httpMethod": "DELETE",
                    "parameters": {
                        "username": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "username"
                    ],
                    "response": {
                        "$ref": "APIResponse_UserWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "get": {
                    "id": "core.user.get",
                    "path": "user",
                    "httpMethod": "GET",
                    "parameters": {
                        "username": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "response": {
                        "$ref": "APIResponse_UserWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "list": {
                    "id": "core.user.list",
                    "path": "users",
                    "httpMethod": "GET",
                    "parameters": {
                        "companyId": {
                            "type": "string",
                            "location": "query"
                        },
                        "count": {
                            "type": "string",
                            "location": "query"
                        },
                        "cursor": {
                            "type": "string",
                            "location": "query"
                        },
                        "search": {
                            "type": "string",
                            "location": "query"
                        },
                        "sort": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "response": {
                        "$ref": "APIResponse_UserWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                },
                "update": {
                    "id": "core.user.update",
                    "path": "user",
                    "httpMethod": "POST",
                    "parameters": {
                        "data": {
                            "type": "string",
                            "required": true,
                            "location": "query"
                        },
                        "username": {
                            "type": "string",
                            "location": "query"
                        }
                    },
                    "parameterOrder": [
                        "data"
                    ],
                    "response": {
                        "$ref": "APIResponse_UserWrapper"
                    },
                    "scopes": [
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                }
            }
        }
    }
}
;