const headers = {
    apac : [
        'RequestID',
        'DateSubmitted',
        'UserName',
        'ReportType',
        'Country',
        'FiscalYear',
        'FiscalPeriod',
        'FromDate',
        'ToDate',
        'FileSize',
        'Status',
        'Download',    
      ],
    nonApac : [
        'RequestID',
        'DateSubmitted',
        'UserName',
        'ReportType',
        'ReportFormat',
        'Filters',
        'FileSize',
        'Status',
        'Download',    
      ],
      singco : [
        'RequestID',
        'DateSubmitted',
        'UserName',
        'ReportType',
        'ReportFormat',
        'Filters',
        'FileSize',
        'Status',
        'Download',
      ],
      sbspx4 : [
        'RequestID',
        'SubmittedOn',
        'UserName',
        'BundleType',
        'ReportType',
        'ReportFormat',
        'FiscalYear',
        'FiscalPeriod',
        'FromDate',
        'ToDate',
        'State',
        'SalesOrg',
        'FileSize',
        'Status',
        'Download',  
      ],
}

const dataTables = {
    apac : [
        {
          RequestID: 130,
          DateSubmitted: '2023-09-22 09:57:41.0',
          UserName: 'Bagya Shivani',
          ReportType: 'GL Summary Report',
          Country: 'AU',
          FiscalYear: '',
          FiscalPeriod: '',
          FromDate: '2023-02-01',
          ToDate: '2023-02-28',
          FileSize: '',
          Status: 'Submitted',
          Download: '',      
        },
        {
          RequestID: 129,
          DateSubmitted: '2023-09-19 22:10:16.0',
          UserName: 'Srividya Krishna',
          ReportType: 'PLI Detail Report',
          Country: 'AU',
          FiscalYear: '2023',
          FiscalPeriod: '12',
          FromDate: '',
          ToDate: '',
          FileSize: '283989',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 128,
          DateSubmitted: '2023-09-14 10:55:58.0',
          UserName: 'Jyoti Ranjan Swain',
          ReportType: 'GL Summary Report',
          Country: 'JP',
          FiscalYear: '2023',
          FiscalPeriod: '10',
          FromDate: '',
          ToDate: '',
          FileSize: '2',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 127,
          DateSubmitted: '2023-09-14 04:53:15.0',
          UserName: 'Jyoti Ranjan Swain',
          ReportType: 'GL Summary Report',
          Country: 'JP',
          FiscalYear: '2023',
          FiscalPeriod: '11',
          FromDate: '',
          ToDate: '',
          FileSize: '2',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 126,
          DateSubmitted: '2023-09-11 02:53:29.0',
          UserName: 'Yuan Yuan Guo',
          ReportType: 'GL Summary Report',
          Country: 'AU',
          FiscalYear: '2023',
          FiscalPeriod: '11',
          FromDate: '',
          ToDate: '',
          FileSize: '2',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 125,
          DateSubmitted: '2023-09-11 02:53:06.0',
          UserName: 'Yuan Yuan Guo',
          ReportType: 'PLI Detail Report',
          Country: 'NZ',
          FiscalYear: '2023',
          FiscalPeriod: '11',
          FromDate: '',
          ToDate: '',
          FileSize: '66086',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 124,
          DateSubmitted: '2023-09-11 02:52:45.0',
          UserName: 'Yuan Yuan Guoon',
          ReportType: 'Panama Summary Report',
          Country: 'AU',
          FiscalYear: '2023',
          FiscalPeriod: '11',
          FromDate: '',
          ToDate: '',
          FileSize: '2',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 123,
          DateSubmitted: '2023-07-31 03:17:29.0',
          UserName: 'Satoshi Tanaka',
          ReportType: 'PLI Detail Report',
          Country: 'NZ',
          FiscalYear: '2023',
          FiscalPeriod: '9',
          FromDate: '',
          ToDate: '',
          FileSize: '64208',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 122,
          DateSubmitted: '2023-07-24 02:24:43.0',
          UserName: 'Satomi Gilhome',
          ReportType: 'PLI Detail Report',
          Country: 'NZ',
          FiscalYear: '2023',
          FiscalPeriod: '8',
          FromDate: '',
          ToDate: '',
          FileSize: '76038',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 121,
          DateSubmitted: '2023-07-11 15:59:17.0',
          UserName: 'Peter Tran',
          ReportType: 'Panama PLI Report',
          Country: 'NZ',
          FiscalYear: '2020',
          FiscalPeriod: '1',
          FromDate: '',
          ToDate: '',
          FileSize: '',
          Status: 'No Data',
          Download: '',
        },
        {
          RequestID: 120,
          DateSubmitted: '2023-07-07 03:04:37.0',
          UserName: 'Peter Tran',
          ReportType: 'PLI Detail Report',
          Country: 'AU',
          FiscalYear: '2022',
          FiscalPeriod: '1',
          FromDate: '',
          ToDate: '',
          FileSize: '493046',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 119,
          DateSubmitted: '2023-07-10 08:48:45.0',
          UserName: 'Satoshi Tanaka',
          ReportType: 'GL Summary Report',
          Country: 'JP',
          FiscalYear: '',
          FiscalPeriod: '',
          FromDate: '2022-06-26',
          ToDate: '2023-07-01',
          FileSize: '2',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 118,
          DateSubmitted: '2023-07-10 07:26:23.0',
          UserName: 'Satoshi Tanaka',
          ReportType: 'GL Summary Report',
          Country: 'JP',
          FiscalYear: '2023',
          FiscalPeriod: '7,8,9',
          FromDate: '',
          ToDate: '',
          FileSize: '2',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 117,
          DateSubmitted: '2023-07-19 08:56:23.0',
          UserName: 'Satomi Gilhome',
          ReportType: 'PLI Bundle Report',
          Country: 'AU,NZ',
          FiscalYear: '',
          FiscalPeriod: '',
          FromDate: '2023-04-02',
          ToDate: '2023-07-01',
          FileSize: '202046',
          Status: 'Completed',
          Download: 'Download',
        },
      ],
      nonApac : [
        {
          RequestID: 33927,
          DateSubmitted: '09/28/23 15:32 A.M.',
          UserName: 'Manas Ranjan Sethi',
          ReportType: 'Summary by Country and Tax',
          ReportFormat: 'XLS',
          Filters: 'Country: VN,CountryRegion: EUR,Calendar Year : 2023,Calendar Quarter : 3,Calendar Month: 7,Gift Card: N,Bundle: N,HC Flag: Y,HC Color: N,Exclude Redemption Content: N',
          FileSize: '0.45',
          Status: 'Completed',
          Download: 'Download',      
        },
        {
          RequestID: 33926,
          DateSubmitted: '09/28/23 15:31 A.M.',
          UserName: 'Manas Ranjan Sethi',
          ReportType: 'Summary by Country & Tax',
          ReportFormat: 'XLS',
          Filters: 'Country: VN,CountryRegion: EUR,Tax Code: ,Date From: 01/08/2023,Date To: 31/08/2023,Gift Card: N,Bundle: N,HC Flag: Y,HC Color: N,Exclude Redemption Content: N',
          FileSize: '0.48',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33925,
          DateSubmitted: '09/28/23 07:03 A.M.',
          UserName: 'Lucinda Greane',
          ReportType: 'Summary by Country & Tax',
          ReportFormat: 'XLS',
          Filters: 'Country: KE,CountryRegion: EUR,Exchange Rate Type: M,Exchange Rate Date: 15/08/2023,Date From: 01/09/2023,Date To: 02/09/2023,Gift Card: N,Bundle: N,HC Flag: Y,HC Color: N,Exclude Redemption Content: N',
          FileSize: '0.41',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33924,
          DateSubmitted: '09/28/23 07:02 A.M.',
          UserName: 'Lucinda Greaney',
          ReportType: 'Summary by Country and Tax',
          ReportFormat: 'XLS',
          Filters: 'Country: ZW,CountryRegion: EUR,Exchange Rate Type: M,Exchange Rate Date: 15/08/2023,Date From: 01/09/2023,Date To: 02/09/2023,Gift Card: N,Bundle: N,HC Flag: Y,HC Color: N,Exclude Redemption Content: N',
          FileSize: '0.44',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33923,
          DateSubmitted: '09/28/23 05:34 A.M.',
          UserName: 'Vivian Teng',
          ReportType: 'Invoice Header',
          ReportFormat: 'CSV',
          Filters: 'CountryList: TW,CountryRegion: EUR,Vendor Type: ,Date From: 27/08/2023,Date To: 28/09/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: N,HC Flag: Y,HC Color: N',
          FileSize: '371179.41',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33922,
          DateSubmitted: '09/26/23 01:01 A.M.',
          UserName: 'HSUN-CHIA CHIH',
          ReportType: 'Invoice Header',
          ReportFormat: 'CSV',
          Filters: 'CountryList: TW,CountryRegion: EUR,Vendor Type: ,Date From: 27/08/2023,Date To: 26/09/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: N,HC Flag: Y,HC Color: N',
          FileSize: '346757.11',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33921,
          DateSubmitted: '09/22/23 12:17 A.M.',
          UserName: 'Elaine O Callaghan',
          ReportType: 'Summary by Country & Tax',
          ReportFormat: 'XLS',
          Filters: 'Country: NO,CountryRegion: EUR,Tax Code: ,Date From: 01/08/2023,Date To: 05/08/2023,Gift Card: N,Bundle: N,HC Flag: Y,HC Color: N,Exclude Redemption Content: N',
          FileSize: '0.46',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33920,
          DateSubmitted: '09/22/23 10:57 A.M.',
          UserName: 'Jessica Duggan',
          ReportType: 'Panama PLI Report',
          ReportFormat: 'XLS',
          Filters: 'CountryList: AL,CountryRegion: EUR,Vendor Type: ,Date From: 01/08/2023,Date To: 02/08/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: N,HC Flag: Y,HC Color: N',
          FileSize: '3176.17',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33919,
          DateSubmitted: '08/22/23 13:06 A.M.',
          UserName: 'Jennifer Hassett',
          ReportType: 'Web Order PLI Report',
          ReportFormat: 'CSV',
          Filters: 'CountryList: VN,CountryRegion: EUR,Date From: 01/07/2023,Date To: 31/07/2023,Exclude Redemption Content: N,HC Flag: Y',
          FileSize: '228034.82',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33918,
          DateSubmitted: '08/15/23 07:58 A.M.',
          UserName: 'Marzena Rosiak',
          ReportType: 'Web Order PLI Report',
          ReportFormat: 'CSV',
          Filters: 'CountryList: FR,CountryRegion: EUR,Date From: 01/01/2023,Date To: 30/07/2023,Web Order No: MXG1XG5N76,MQVL58MZ4K,Exclude Redemption Content: N,HC Flag: Y',
          FileSize: '0.77',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33917,
          DateSubmitted: '07/10/23 10:03 A.M.',
          UserName: 'Jyoti Ranjan Swain',
          ReportType: 'Panama PLI Report',
          ReportFormat: 'XLS',
          Filters: 'CountryList: GB,CountryRegion: EUR,Vendor Type: ,Fiscal Year : 2023,Fiscal Period: 2,Gift Card: N,Exclude Redemption Content: N,HC Flag: N,HC Color: N',
          FileSize: '531.76',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33916,
          DateSubmitted: '06/18/23 07:17 A.M.',
          UserName: 'Nicholle O Learya',
          ReportType: 'PLI Listing',
          ReportFormat: 'CSV',
          Filters: 'CountryList: IS,CountryRegion: EUR,Vendor Type: ,Date From: 01/09/2023,Date To: 02/09/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: N,HC Flag: Y,HC Color: N',
          FileSize: '1109.19',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33915,
          DateSubmitted: '06/18/23 07:16 A.M.',
          UserName: 'Nicholle O Leary',
          ReportType: 'PLI Listing',
          ReportFormat: 'CSV',
          Filters: 'CountryList: IS,CountryRegion: EUR,Vendor Type: ,Date From: 01/07/2023,Date To: 01/07/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: N,HC Flag: Y,HC Color: N',
          FileSize: '540.08',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 33914,
          DateSubmitted: '05/15/23 07:50 A.M.',
          UserName: 'Colette Fleming',
          ReportType: 'PLI Listing',
          ReportFormat: 'CSV',
          Filters: 'CountryList: GB,CountryRegion: EUR,Content Type: Y4,Vendor Type: ,Date From: 01/08/2023,Date To: 31/08/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: Y,HC Flag: Y,HC Color: N',
          FileSize: '102.16',
          Status: 'Completed',
          Download: 'Download',
        },
      ],
      singco : [
        {
          RequestID: 301,
          DateSubmitted: '09/28/23 10:36 A.M.',
          UserName: 'Somalin Hussain',
          ReportType: 'Invoice Header',
          ReportFormat: 'CSV',
          Filters: 'CountryList: KH,CountryRegion: EUR,Company Code: 164,Vendor Type: ,Date From: 03/09/2023,Date To: 30/09/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: N',
          FileSize: '0.55',
          Status: 'Completed',
          Download: 'Download',      
        },
        {
          RequestID: 300,
          DateSubmitted: '09/28/23 10:34 A.M.',
          UserName: 'Somalin Hussain',
          ReportType: 'KR Platform Summary',
          ReportFormat: 'XLS',
          Filters: 'Country: KR,CountryRegion: KOR,Company Code: 164,Date From: 03/09/2023,Date To: 30/09/2023,Gift Card: N,Bundle: N,HC Flag: undefined,HC Color: undefined,Report Type: 106,Exclude Redemption Content: N',
          FileSize: '0.42',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 299,
          DateSubmitted: '09/28/23 10:31 A.M.',
          UserName: 'Bagya Shivani',
          ReportType: 'PLI Listing',
          ReportFormat: 'CSV',
          Filters: 'CountryList: KH,CountryRegion: EUR,Company Code: 164,Exchange Rate Type: M,Exchange Rate Date: 01/01/2001,Vendor Type: ,Date From: 03/09/2023,Date To: 30/09/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: N',
          FileSize: '0.73',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 298,
          DateSubmitted: '09/28/23 05:44 A.M.',
          UserName: 'Bagya Shivani',
          ReportType: 'Summary by Country and Tax',
          ReportFormat: 'XLS',
          Filters: 'Country: KR,CountryRegion: KOR,Company Code: 164,Fiscal Year: 2023,Fiscal Quarter: 4,Fiscal Period: 11,Gift Card: N,Bundle: N,HC Flag: undefined,HC Color: undefined,Exclude Redemption Content: N',
          FileSize: '0.59',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 297,
          DateSubmitted: '09/27/23 17:30 A.M.',
          UserName: 'Lavanya Lakku',
          ReportType: 'Summary by Country and Tax',
        ReportFormat: 'XLS',
          Filters: 'Country: HR,CountryRegion: EUR,Company Code: 164,Fiscal Year: 2023,Fiscal Quarter: 2,Fiscal Period: 4,5,Gift Card: N,Bundle: N,HC Flag: undefined,HC Color: undefined,Vendor Type: KR01,Exclude Redemption Content: N',
          FileSize: '',
          Status: 'No Data',
          Download: '',
        },
        {
          RequestID: 296,
          DateSubmitted: '09/25/23 06:50 A.M.',
          UserName: 'VIVEK KUMAR REDDY MUDUGANTI',
          ReportType: 'PLI Listing',
          ReportFormat: 'CSV',
          Filters: 'CountryList: KR,CountryRegion: KOR,Vendor Type: ,Fiscal Year : 2023,Fiscal Period: 12,Gift Card: N,Bundle: N,Exclude Redemption Content: N',
          FileSize: '',
          Status: 'No Data',
          Download: '',
        },
        {
          RequestID: 295,
          DateSubmitted: '09/08/23 19:24 A.M.',
          UserName: 'Lavanya Lakku',
          ReportType: 'SG GST Filing',
          ReportFormat: 'XLS',
          Filters: 'Country: AT,CountryRegion: EUR,Company Code: 164,183,Fiscal Year: 2023,Fiscal Quarter: 2,Fiscal Period: 4,5,Gift Card: N,Bundle: N,HC Flag: undefined,HC Color: undefined,Report Type: 104,Exclude Redemption Content: N',
          FileSize: '',
          Status: 'Submitted',
          Download: '',
        },
        {
          RequestID: 294,
          DateSubmitted: '08/30/23 04:45 A.M.',
          UserName: 'Jyoti Ranjan Swain',
          ReportType: 'KR Platform Summary',
          ReportFormat: 'XLS',
          Filters: 'Country: KR,CountryRegion: KOR,Company Code: 164,Fiscal Year: 2015,Fiscal Quarter: 1,Fiscal Period: 1,Gift Card: N,Bundle: N,HC Flag: undefined,HC Color: undefined,Report Type: 106,Exclude Redemption Content: N',
          FileSize: '0.38',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 293,
          DateSubmitted: '08/29/23 10:30 A.M.',
          UserName: 'Bagya Shivani',
          ReportType: 'Invoice Header',
          ReportFormat: 'CSV',
          Filters: 'CountryList: KR,CountryRegion: KOR,Company Code: 164,Vendor Type: ,Date From: 26/12/2022,Date To: 29/08/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: N',
          FileSize: '294.92',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 292,
          DateSubmitted: '08/07/23 08:55 A.M.',
          UserName: 'Yuvaraj Sampath',
          ReportType: 'Summary by Country and Tax',
          ReportFormat: 'XLS',
          Filters: 'CountryList: UZ,CountryRegion: EUR,Content Type: 3,Web Order Type: DO,Vendor Type: KR02,Fiscal Year : 2023,Fiscal Period: 8,Gift Card: N,Bundle: N,Exclude Redemption Content: N,Tax Prod Driver: 4JH',
          FileSize: '0.89',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 291,
          DateSubmitted: '07/10/23 10:03 A.M.',
          UserName: 'Jyoti Ranjan Swain',
          ReportType: 'KR VAT Filing',
          ReportFormat: 'XLS',
          Filters: 'CountryList: RS,CountryRegion: EUR,Content Type: V4,Vendor Type: KR01,Fiscal Year : 2022,Fiscal Period: 7,Gift Card: N,Bundle: N,Exclude Redemption Content: N',
          FileSize: '',
          Status: 'No Data',
          Download: '',
        },
        {
          RequestID: 290,
          DateSubmitted: '06/18/23 07:17 A.M.',
          UserName: 'Yuvaraj Sampath',
          ReportType: 'GL Summary Report',
          ReportFormat: 'XLS',
          Filters: 'US',
          FileSize: '0.86',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 289,
          DateSubmitted: '06/18/23 07:16 A.M.',
          UserName: 'Somalin Hussain',
          ReportType: 'Invoice Header',
          ReportFormat: 'CSV',
          Filters: 'CountryList: None Selected ,CountryRegion:  None Selected ,Company Code: 164,Vendor Type: ,Date From: 01/09/2023,Date To: 30/09/2023,Gift Card: N,Bundle: N,Exclude Redemption Content: N',
          FileSize: '959.66',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 287,
          DateSubmitted: '05/15/23 07:50 A.M.',
          UserName: 'Somalin Hussain',
          ReportType: 'Summary by Country and Tax',
          ReportFormat: 'XLS',
          Filters: 'Country: KH,CountryRegion: EUR,Company Code: 164,Calendar Year : 2023,Calendar Quarter : 3,Calendar Month: 9,Gift Card: N,Bundle: N,HC Flag: undefined,HC Color: undefined,Exclude Redemption Content: N',
          FileSize: '0.37',
          Status: 'Completed',
          Download: 'Download',
        },
      ],
      sbspx4 : [
        {
          RequestID: 1478,
          SubmittedOn: '2023-10-03 11:29:09',
          UserName: 'Lavanya Lakku',
          BundleType: 'Z',
          ReportType: 'Audit Population Summary Reportt',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '5',
          FromDate: '',
          ToDate: '',
          State: 'US-Colorado',
          SalesOrg: '',
          FileSize: '',
          Status: 'Submitted',
          Download: '',      
        },
        {
          RequestID: 1477,
          SubmittedOn: '2023-09-27 05:57:46',
          UserName: 'Rajesh Pradhan',
          BundleType: 'M',
          ReportType: 'PLI Line Item Report - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '',
          FromDate: '20-Aug-23',
          ToDate: '02-Sep-23',
          State: 'US-California',
          SalesOrg: '',
          FileSize: '1.52',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1476,
          SubmittedOn: '2023-09-27 00:16:36',
          UserName: 'Charath chandra Sudhakar babu',
          BundleType: 'M',
          ReportType: 'Use Tax - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '11',
          FromDate: '06-Aug-23',
          ToDate: '02-Sep-23',
          State: 'US-Illinois',
          SalesOrg: '',
          FileSize: '6.66',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1475,
          SubmittedOn: '2023-09-26 03:11:02',
          UserName: 'Charath chandra Sudhakar babu',
          BundleType: 'M',
          ReportType: 'Tax Clawback - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '',
          FromDate: '09-Aug-23',
          ToDate: '09-Aug-23',
          State: 'US-New Jersey',
          SalesOrg: '',
          FileSize: '0.72',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1474,
          SubmittedOn: '2023-09-26 02:40:30',
          UserName: 'Rajesh Pradhan',
          BundleType: 'M',
          ReportType: 'PLI Line Item Report - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '',
          FromDate: '20-Aug-23',
          ToDate: '02-Sep-23',
          State: 'US-California',
          SalesOrg: '',
          FileSize: '1.51',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1473,
          SubmittedOn: '2023-09-25 02:40:30',
          UserName: 'Rajesh Pradhan',
          BundleType: 'M',
          ReportType: 'Header Level Report',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '',
          FromDate: '05-Jun-23',
          ToDate: '10-Jun-23',
          State: 'US-Oregon',
          SalesOrg: '',
          FileSize: '1.44',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1472,
          SubmittedOn: '2023-09-24 06:46:01',
          UserName: 'Charath chandra Sudhakar babu',
          BundleType: 'M',
          ReportType: 'PLI Line Item Report - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '12',
          FromDate: '03-Sep-23',
          ToDate: '30-Sep-23',
          State: 'US-New Jersey',
          SalesOrg: '',
          FileSize: '10.24',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1471,
          SubmittedOn: '2023-09-24 02:14:54',
          UserName: 'Rajesh Pradhan',
          BundleType: 'M',
          ReportType: 'PLI Line Item Report - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '',
          FromDate: '23-Sep-23',
          ToDate: '26-Sep-23',
          State: 'US-California',
          SalesOrg: '',
          FileSize: '',
          Status: 'No Data',
          Download: '',
        },
        {
          RequestID: 1470,
          SubmittedOn: '2023-09-23 18:02:27',
          UserName: 'Lavanya Lakku',
          BundleType: 'Digital',
          ReportType: 'Line Item Detail Report - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '6',
          FromDate: '05-Mar-23',
          ToDate: '01-Apr-23',
          State: 'US-Idaho',
          SalesOrg: '',
          FileSize: '',
          Status: 'No Data',
          Download: '',
        },
        {
          RequestID: 1469,
          SubmittedOn: '2023-09-23 17:24:51',
          UserName: 'Lavanya Lakku',
          BundleType: 'M',
          ReportType: 'PLI Line Item Report - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '6',
          FromDate: '05-Mar-23',
          ToDate: '01-Apr-23',
          State: 'US-Alaska',
          SalesOrg: '',
          FileSize: '1.4',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1468,
          SubmittedOn: '2023-09-22 09:00:58',
          UserName: 'Javier (GBS Tax) Lopez',
          BundleType: 'Digital',
          ReportType: 'PLI Line Item Report - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '12',
          FromDate: '03-Sep-23',
          ToDate: '30-Sep-23',
          State: 'US-Alabama',
          SalesOrg: '',
          FileSize: '1.49',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1467,
          SubmittedOn: '2023-09-21 04:56:42',
          UserName: 'Jyoti Ranjan Swain',
          BundleType: 'Digital',
          ReportType: 'Summary Digital Services Report',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '',
          FromDate: '01-May-23',
          ToDate: '31-May-23',
          State: 'CA',
          SalesOrg: '',
          FileSize: '0.76',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1466,
          SubmittedOn: '2023-09-20 20:32:17',
          UserName: 'Yuvaraj Sampath',
          BundleType: 'Z',
          ReportType: 'PLI Line Item Report - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '',
          FromDate: '01-Sep-23',
          ToDate: '20-Sep-23',
          State: 'US-California',
          SalesOrg: '',
          FileSize: '329.68',
          Status: 'Completed',
          Download: 'Download',
        },
        {
          RequestID: 1465,
          SubmittedOn: '2023-09-20 20:18:35',
          UserName: 'Manas Ranjan Sethi',
          BundleType: 'Digital',
          ReportType: 'PLI Line Item Report - Internal',
          ReportFormat: 'Tab Delimited',
          FiscalYear: '2023',
          FiscalPeriod: '',
          FromDate: '05-Sep-23',
          ToDate: '05-Sep-23',
          State: 'US-California',
          SalesOrg: '',
          FileSize: '760.82',
          Status: 'Completed',
          Download: 'Download',
        },
      ]
    
    
}

const dropdownValues = { 
  MC_APAC_TAX_RPT_GENERIC : {
    "msg": "Query Executed!",
    "status": "SUCCESS",
    "data": {
        "serviceExecTime": 81,
        "maxLimit": 10000,
        "fetchSize": 2000,
        "appName": "eurovat_snowflake",
        "recordsProcessed": 10,
        "serviceName": "MC_APAC_TAX_RPT_GENERIC",
        "version": "ver1",
        "status": "success"
    },
    "datas": [
        {
            "REF_TYPE_CD": "COMPANY_CD",
            "REF_CD": "0082",
            "REF_DESC": "0082-AUS&NZ"
        },
        {
            "REF_TYPE_CD": "COMPANY_CD",
            "REF_CD": "0170",
            "REF_DESC": "0170-JAPAN"
        },
        {
            "REF_TYPE_CD": "COUNTRY_CD",
            "REF_CD": "AU",
            "REF_DESC": "Australia (AU)"
        },
        {
            "REF_TYPE_CD": "COUNTRY_CD",
            "REF_CD": "JP",
            "REF_DESC": "Japan (JP)"
        },
        {
            "REF_TYPE_CD": "COUNTRY_CD",
            "REF_CD": "NZ",
            "REF_DESC": "New Zealand (NZ)"
        },
        {
            "REF_TYPE_CD": "REPORT_TYPE",
            "REF_CD": "GL_SUMMARY",
            "REF_DESC": "GL Summary Report"
        },
        {
            "REF_TYPE_CD": "REPORT_TYPE",
            "REF_CD": "PANAMA_PLI_REPORT",
            "REF_DESC": "Panama PLI Report"
        },
        {
            "REF_TYPE_CD": "REPORT_TYPE",
            "REF_CD": "PANAMA_SUM_REPORT",
            "REF_DESC": "Panama Summary Report"
        },
        {
            "REF_TYPE_CD": "REPORT_TYPE",
            "REF_CD": "PLI_BUNDLE_REPORT",
            "REF_DESC": "PLI Bundle Report"
        },
        {
            "REF_TYPE_CD": "REPORT_TYPE",
            "REF_CD": "PLI_REPORT",
            "REF_DESC": "PLI Detail Report"
        }
    ],
    "gsfSessionID": null,
    "requestId": "48ca8685-b2f6-461c-a069-f6919c6abf29",
    "gsfException": null
},
  MC_IFIN_VENDOR_IND :{
    "msg": "Query Executed!",
    "status": "SUCCESS",
    "data": {
        "serviceExecTime": 15214,
        "maxLimit": 10000,
        "fetchSize": 2000,
        "appName": "eurovat_snowflake",
        "recordsProcessed": 3,
        "serviceName": "MC_IFIN_VENDOR_IND",
        "version": "ver1",
        "status": "success"
    },
    "datas": [
        {
            "METADATA_TYPE": "VENDOR_IND",
            "METADATA_VALUES": "Foreign",
            "METADATA_CD": "KR01"
        },
        {
            "METADATA_TYPE": "VENDOR_IND",
            "METADATA_VALUES": "Local",
            "METADATA_CD": "KR02"
        },
        {
            "METADATA_TYPE": "VENDOR_IND",
            "METADATA_VALUES": "Reseller",
            "METADATA_CD": "KR03"
        }
    ],
    "gsfSessionID": null,
    "requestId": "a8cc89bd-650b-4451-a557-1fbcbb86aa6e",
    "gsfException": null
},
MC_EUR_VAT_WEB_ORDER_TYPE_LIST : {
  "msg": "Query Executed!",
  "status": "SUCCESS",
  "data": {
      "serviceExecTime": 15204,
      "maxLimit": 10000,
      "fetchSize": 2000,
      "appName": "eurovat_snowflake",
      "recordsProcessed": 10,
      "serviceName": "MC_EUR_VAT_WEB_ORDER_TYPE_LIST",
      "version": "ver1",
      "status": "success"
  },
  "datas": [
      {
          "REF_DESC": "Breakage(BR)",
          "REF_CD": "BR"
      },
      {
          "REF_DESC": "Chargeback(CB)",
          "REF_CD": "CB"
      },
      {
          "REF_DESC": "Chargeback Reversal(CR)",
          "REF_CD": "CR"
      },
      {
          "REF_DESC": "Delinquent(DO)",
          "REF_CD": "DO"
      },
      {
          "REF_DESC": "Delinquent Recovery(DR)",
          "REF_CD": "DR"
      },
      {
          "REF_DESC": "Normal(N)",
          "REF_CD": "N"
      },
      {
          "REF_DESC": "Obligation Correction(OC)",
          "REF_CD": "OC"
      },
      {
          "REF_DESC": "Refund(R)",
          "REF_CD": "R"
      },
      {
          "REF_DESC": "Royalty Correction(RC)",
          "REF_CD": "RC"
      },
      {
          "REF_DESC": "XCard Allowance(XC)",
          "REF_CD": "XC"
      }
  ],
  "gsfSessionID": null,
  "requestId": "ce32dc23-6ffe-46fb-8dfb-29568717226e",
  "gsfException": null
},
MC_EUR_VAT_FISCAL_CAL_LIST : {
  "msg": "Query Executed!",
  "status": "SUCCESS",
  "data": {
      "serviceExecTime": 113,
      "maxLimit": 10000,
      "fetchSize": 2000,
      "appName": "eurovat_snowflake",
      "recordsProcessed": 109,
      "serviceName": "MC_EUR_VAT_FISCAL_CAL_LIST",
      "version": "v2.0",
      "status": "success"
  },
  "datas": [
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 2
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 3
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 4
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 5
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 6
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 7
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 8
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 9
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 10
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 11
      },
      {
          "FISCAL_YEAR": 2015,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 12
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 2
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 3
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 4
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 5
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 6
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 7
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 8
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 9
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 10
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 11
      },
      {
          "FISCAL_YEAR": 2016,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 12
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 2
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 3
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 4
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 5
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 6
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 7
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 8
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 9
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 10
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 11
      },
      {
          "FISCAL_YEAR": 2017,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 12
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 2
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 3
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 4
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 5
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 6
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 7
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 8
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 9
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 10
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 11
      },
      {
          "FISCAL_YEAR": 2018,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 12
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 2
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 3
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 4
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 5
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 6
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 7
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 8
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 9
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 10
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 11
      },
      {
          "FISCAL_YEAR": 2019,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 12
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 2
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 3
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 4
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 5
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 6
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 7
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 8
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 9
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 10
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 11
      },
      {
          "FISCAL_YEAR": 2020,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 12
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 2
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 3
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 4
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 5
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 6
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 7
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 8
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 9
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 10
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 11
      },
      {
          "FISCAL_YEAR": 2021,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 12
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 2
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 3
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 4
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 5
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 6
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 7
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 8
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 9
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 10
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 11
      },
      {
          "FISCAL_YEAR": 2022,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 12
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 2
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 3
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 4
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 5
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 2,
          "FISCAL_PERIOD": 6
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 7
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 8
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 3,
          "FISCAL_PERIOD": 9
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 10
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 11
      },
      {
          "FISCAL_YEAR": 2023,
          "FISCAL_QUARTER": 4,
          "FISCAL_PERIOD": 12
      },
      {
          "FISCAL_YEAR": 2024,
          "FISCAL_QUARTER": 1,
          "FISCAL_PERIOD": 1
      }
  ],
  "gsfSessionID": null,
  "requestId": "63b2c864-3c34-4f44-8f6f-7c6ae7cdc99c",
  "gsfException": null
}


  
}


export {
    headers,
    dataTables,
    dropdownValues,
}