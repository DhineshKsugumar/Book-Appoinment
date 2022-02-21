<template>
  <div>
    <a-spin :spinning="spinning">
      <div class="spin-content">
        <div v-if="currentscreen === 0">
          <div class="Main_Container">
            <a-row
              type="flex"
              justify="center"
              align="middle"
              style="height: calc(100vh - 100px)"
            >
              <a-col :xs="{ span: 24 }" :md="{ span: 24 }">
                <div>
                  <div class="c-card" style="width: 300px; margin: auto">
                    <div class="c-card-img-logo" style="background: none">
                      <img
                        height="180px"
                        slot="cover"
                        alt="example"
                        src="./assets/logo.png"
                      />
                    </div>
                    <div class="c-card-body shadow" @click="book">
                      Book Appoinment
                    </div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
        <div v-if="currentscreen === 1">
          <div class="Main_Container">
            <a-row
              type="flex"
              justify="start"
              align="middle"
              style="height: 100px; background: black"
            >
              <div class="tilehead">&nbsp;&nbsp;Select Service</div>
            </a-row>
            <a-row
              type="flex"
              :gutter="[8, 8]"
              justify="center"
              align="middle"
              style="height: calc(100vh - 100px)"
            >
              <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div>
                  <div
                    class="c-card shadow"
                    style="width: 40%; margin: auto"
                    @click="selectService('Tattoo')"
                  >
                    <div class="c-card-img">
                      <img
                        width="100%"
                        slot="cover"
                        alt="example"
                        src="./assets/tatoo.png"
                      />
                    </div>
                    <div class="c-card-body">Tattoo</div>
                  </div>
                </div>
              </a-col>
              <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div>
                  <div
                    class="c-card shadow"
                    style="width: 40%; margin: auto"
                    @click="selectService('Piercing')"
                  >
                    <div class="c-card-img">
                      <img
                        width="100%"
                        slot="cover"
                        alt="example"
                        src="./assets/piercing.png"
                      />
                    </div>
                    <div class="c-card-body">Piercing</div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
        <div v-if="currentscreen === 2">
          <div class="Main_Container">
            <a-row
              type="flex"
              justify="start"
              align="middle"
              style="height: 100px; background: black"
            >
              <a-col :xs="{ span: 16 }" :md="{ span: 20 }">
                <div class="tilehead">&nbsp;&nbsp;Select Artist</div>
              </a-col>
              <a-col
                :xs="{ span: 8 }"
                :md="{ span: 4 }"
                style="padding-right: 10px"
              >
                <div class="c-card-skip" @click="skipartist">SKIP</div>
              </a-col>
            </a-row>
            <a-row type="flex" justify="center" align="middle">
              <br />
              <a-list
                :grid="{ gutter: 16, column: 4, xs: 1, md: 4 }"
                :data-source="Staff"
                class="listdata"
              >
                <a-list-item slot="renderItem" slot-scope="item">
                  <a @click="selectartist(item.ID)">
                    <a-card
                      hoverable
                      style="width: 240px"
                      class="artistname"
                      :bodyStyle="{ color: '#fff' }"
                    >
                      <img
                        slot="cover"
                        alt="example"
                        :src="profilenull(item.Staff_Image_URL)"
                      />
                      <a-card-meta :title="item.Name.display_value">
                      </a-card-meta>
                    </a-card>
                  </a>
                </a-list-item>
              </a-list>
            </a-row>
          </div>
        </div>
        <div v-if="currentscreen === 3">
          <a-row
            :gutter="16"
            type="flex"
            justify="start"
            align="middle"
            style="height: 100px; background: black"
          >
            <a-col :xs="{ span: 12 }" :md="{ span: 20 }">
              <div class="tilehead">&nbsp;&nbsp;Details</div>
            </a-col>
          </a-row>
          <div style="margin-top: 30px">
            <a-form-model
              ref="ruleForm"
              :model="from"
              :rules="rules"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }"
              style="padding: 0px 20px"
            >
              <a-form-model-item label="First Name" prop="First_name">
                <a-input v-model="from.First_name" />
              </a-form-model-item>
              <a-form-model-item label="Last Name" prop="Last_name">
                <a-input v-model="from.Last_name" />
              </a-form-model-item>
              <a-form-model-item label="Email" prop="Email">
                <a-input v-model="from.Email" />
              </a-form-model-item>
              <a-form-model-item label="Phone" prop="Contact_Number">
                <a-input v-model="from.Contact_Number" />
              </a-form-model-item>
              <a-form-model-item label="DOB" prop="Date_of_Birth">
                <a-date-picker v-model="from.Date_of_Birth"   format="MM/D/yyyy"/>
              </a-form-model-item>
              <div style="text-align: center">
                <a-button-group>
                  <a-button type="primary" @click="firstform">
                    Next <a-icon type="right" />
                  </a-button>
                </a-button-group>
              </div>
            </a-form-model>
          </div>
        </div>
        <div v-if="currentscreen === 4" style="background: #f7f7f7">
          <a-row
            :gutter="16"
            type="flex"
            justify="start"
            align="middle"
            style="height: 100px; background: black"
          >
            <a-col :xs="{ span: 12 }" :md="{ span: 20 }">
              <div class="tilehead">&nbsp;&nbsp;Select Time</div>
            </a-col>
          </a-row>
          <div style="padding: 30px">
            <a-date-picker
              size="large"
              @change="selectdate"
              v-model="from.Choose_Date"
               format="MM/D/yyyy"
               :disabled="timedatedisabled"
            />
            <br />
            <a-card
              :bordered="false"
              class="listcardslot"
              style="padding: 0px;!important"
            >
              <a-list item-layout="horizontal" :data-source="data">
                <a-list-item
                  slot="renderItem"
                  slot-scope="item"
                  class="itemmouseover"
                  @click="SelctTimeSlot(item)"
                >
                  {{ item }}  <a-tag v-if="item == from.Time_Slots" color="#87d068">
        Selected
      </a-tag>
     
                </a-list-item>
              </a-list>
            </a-card>
            <br />
            <div style="text-align: center">
              <a-button-group>
                <a-button type="primary" @click="onSubmit">
                  Done <a-icon type="right" />
                </a-button>
              </a-button-group>
            </div>
          </div>
        </div>
        <div v-if="currentscreen === 5">
          <a-result status="success" title="Your Booking Completed">
            <template #extra> </template>
          </a-result>
        </div>
      </div>
    </a-spin>
    <a-switch v-model="spinning" />
  </div>
</template>
<script type="text/javascript" src="https://js.zohostatic.com/creator/widgets/version/1.0/widgetsdk-min.js"></script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Six+Caps&display=swap");
</style>
<script>
import moment from "moment";
const SlotTIme = [
  "9 AM - 10 AM",
  "10 AM - 11 AM",
  "11 AM - 12 PM",
  "12 PM - 1 PM",
  "1 PM -  2 PM",
];
export default {
  data() {
    return {
      data: [],
      rules: {
        First_name: [
          {
            required: true,
            message: "Please input First Name",
            trigger: "blur",
          },
        ],
        Last_name: [
          {
            required: true,
            message: "Please input Last Name ",
            trigger: "blur",
          },
        ],
        Email: [
          {
            type: "email",
            required: true,
            message: "Please input Email ",
            trigger: "blur",
          },
        ],
        Contact_Number: [
          {
            required: true,
            message: "Please input Phone Number ",
            trigger: "blur",
          },
        ],
        Date_of_Birth: [
          { required: true, message: "Please input Name ", trigger: "change" },
        ],
      },
      rules2: {
        Choose_Date: [
          { required: true, message: "Please input Name ", trigger: "change" },
        ],
      },
      currentscreen: 0,
      spinning: false,
      selectedService: undefined,
      selectedartist: undefined,
      Creator_ID: "",
      Staff: [],
      timedatedisabled :false,
      from: {
        First_name: undefined,
        Last_name: undefined,
        Customer_Name: undefined,
        Contact_Number: undefined,
        Email: undefined,
        Booking_Type: "Online",
        Service_Type: undefined,
        Date_of_Birth: undefined,
        Choose_Date: undefined,
        Time: undefined,
        Time_Slots: undefined,
        Assigned_Artist:undefined,
        Status:"Scheduled"
      },
    };
  },
  mounted() {
    ZOHO.CREATOR.init().then(function (data) {});
  },
  methods: {
    SelctTimeSlot(item)
    {
      if(item == this.from.Time_Slots)
      {
this.from.Time_Slots = undefined;
      }
      else{
this.from.Time_Slots = item;
      }
        
    },
    selectdate() {
      let NewObj = Object.assign([], SlotTIme);
      if (this.from.Choose_Date) {
        var varStage = this;
        console.log(this.from.Choose_Date);
        var cra =
          "Assigned_Artist == " +
          varStage.selectedartist +
          '&& Choose_Date =="' +
          varStage.timeFormate(varStage.from.Choose_Date.toDate()) +
          '"';
        var varStage = this;
        console.log(cra);
        var configB = {
          appName: "sdtattoo",
          reportName: "Appointments_All",
          criteria: cra,
        };
        ZOHO.CREATOR.API.getAllRecords(configB).then(function (response) {
          console.log(response);
          if (response.code == 3000) {
            response.data.map((item) => {
              var index = NewObj.indexOf(item.Time_Slots);
              console.log(index);
              if (index > -1) {
                NewObj.splice(index, 1); // 2nd parameter means remove one item only
              }
            });
            console.log(NewObj);
            varStage.data = NewObj;
          }
          else
          {
varStage.data = SlotTIme;
          }
        });

        this.data = SlotTIme;
      } else {
        this.data = [];
      }
    },
    book() {
      this.currentscreen++;
    },
    profilenull(item) {
      if (item) {
        return item;
      } else {
        return "https://www.sandiegotattooshop.com/wp-content/uploads/2020/11/comingsoonartist-300x300.jpg";
      }
    },
    selectService(varSerive) {
      this.from.Service_Type = varSerive;
      if (varSerive == "Piercing") {
        this.timedatedisabled = true;
        this.from.Choose_Date = moment();
        this.data = SlotTIme;
        this.currentscreen = this.currentscreen + 2;
      } else {
        var varStage = this;
        //console.log(cra);
        var configB = {
          appName: "sdtattoo",
          reportName: "Widget_Staff_All",
        };
        ZOHO.CREATOR.API.getAllRecords(configB).then(function (response) {
          console.log(response);
          varStage.Staff = response.data;
        });
        this.currentscreen++;
      }
    },
    skipartist() {
      this.currentscreen++;
    },

    selectartist(id) {
      this.selectedartist = id;
      this.from.Assigned_Artist = id;
      this.currentscreen++;
    },
    onSubmit() {
      var valid =true;
      var varStage = this;
      this.spinning = true;
          console.log(valid);
          if (valid) {
            if(!varStage.from.Time_Slots || !varStage.from.Choose_Date)
            {
                 varStage.$message.error("Date or Time is Missing");
                  this.spinning = false;
            }
            else
            {
            var AddRecord = {
              data: varStage.FormatObject(),
            };
            // console.log(AddRecord)
            var config3 = {
              appName: "sdtattoo",
              formName: "Appointments",
              data: AddRecord,
            };
            console.log(AddRecord);
            ZOHO.CREATOR.API.addRecord(config3).then(function (response) {
              if (response.code == 3000) {
                varStage.spinning = false;
                varStage.currentscreen++;
              } else {
                varStage.$message.error("Some error Contact the admin");
                varStage.spinning = false;
                console.log(response)
              }
            });
            }
          } else {
            (varStage.spinning = false), console.log("error submit!!");
            return false;
          }
    },
    firstform() {
      this.$refs.ruleForm.validate((valid) => {
        console.log(valid);
        if (valid) {
            console.log("in to date");
          if(this.getAge(this.from.Date_of_Birth.toDate()) < 18 && this.from.Service_Type == "Tattoo")
          {
                 this.$message.error("Age should be above 18");
          }
          else
          {
          this.currentscreen++;
          console.log(this.currentscreen);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
},
    next() {
      this.currentscreen++;
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    FormatObject() {
      console.log(this.from)
      let NewObj = Object.assign({}, this.from);
      if (NewObj.Date_of_Birth) {
        NewObj.Date_of_Birth = this.timeFormate(NewObj.Date_of_Birth.toDate());
      }
      if (NewObj.Choose_Date) {
        NewObj.Choose_Date = this.timeFormate(NewObj.Choose_Date.toDate());
      }
      NewObj.Customer_Name = {
        first_name: NewObj.First_name,
        last_name: NewObj.Last_name,
      };
      return JSON.parse(JSON.stringify(NewObj));
    },
    timeFormate(date) {
      var mS = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var year_s = date.getFullYear();
      var Month_s = date.getMonth();
      var Date_S = date.getDate();
      var strTime = Date_S + "-" + mS[Month_s] + "-" + year_s;
      console.log(strTime);
      return strTime;
    },
    back() {
      this.currentscreen--;
    },
  },
};
</script>
<style>
.Main_Container {
  min-height: 100vh;
  background-image: url(https://www.sandiegotattooshop.com/wp-content/themes/sdtattoomob2016/images/headerbg-main.jpg);
}

.artistname {
  background: #548302 !important;
  color: white;
}

.ant-btn-primary {
  background: #548302 !important;
  color: white;
}
.artistname:hover {
  box-shadow: 5px 11px 47px 0px rgba(255, 255, 255, 0.75) !important;
  -webkit-box-shadow: 5px 11px 47px 0px rgba(255, 255, 255, 0.75) !important;
  -moz-box-shadow: 5px 11px 47px 0px rgba(255, 255, 255, 0.75) !important;
}
.spincus {
  position: fixed !important;
  width: 100vw !important;
  height: 100vh !important;
  padding-top: 50%;
  background: #d1d1d1b8 !important;
  z-index: 4;
}
/* 
.ant-card-bordered {
  border: 1px solid #000000 !important;
} */
.listdata {
  width: 90%;
  padding: 20px !important;
  margin-top: 50px !important;
  text-align: -webkit-center !important;
}
.Main_Container .ant-card-cover {
  border: unset !important;
}

.ant-card-meta-title {
  color: #fff !important;
}
.c-card {
  /* flex-direction: column;
  display: flex; */
  color: white;
}
.listcardslot .ant-card-body {
  padding: 0px !important;
}

.listcardslot .itemmouseover {
  padding: 10px 20px !important;
}

.c-card-body {
  font-size: 42px;
  font-family: "Six Caps", sans-serif;
  color: #fff;
  background: #548302;
  padding: 8px;
  text-align: center;
}
.c-card-skip {
  font-size: 28px;
  font-family: "Six Caps", sans-serif;
  color: #fff;
  background: #548302;
  padding: 2px;
  text-align: center;
}
.ant-btn {
  font-family: "Six Caps", sans-serif;
  color: #fff;
  background: #548302;
  height: auto !important;
  font-size: 30px !important;
  padding: 0px 30px !important;
}

.tilehead {
  font-size: 42px;
  font-family: "Six Caps", sans-serif;
  color: #fff;
  padding: 8px;
  text-align: left;
}

.shadow:hover {
  box-shadow: 5px 11px 47px 0px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 5px 11px 47px 0px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 5px 11px 47px 0px rgba(255, 255, 255, 0.75);
}
.listcardslot .itemmouseover:hover {
  font-weight: 700;
  box-shadow: 5px 11px 47px 0px rgba(212, 212, 212, 0.75);
  -webkit-box-shadow: 5px 11px 47px 0px rgba(212, 212, 212, 0.75);
  -moz-box-shadow: 5px 11px 47px 0px rgba(212, 212, 212, 0.75);
}

.listcardslot .itemmouseover {
  border-bottom: 2px solid #f3ecec !important;
}

.c-card-img-logo {
  padding: 20px;
  text-align: center;
  border: unset !important;
}
.c-card-img {
  padding: 20px;
  border: unset !important;
  border: unset !important;
  background: #1c1c1b !important;
}

.signclass {
  border: black 1px solid;
  max-width: 400px;
}
.Main_Container {
  background-image: url(https://www.sandiegotattooshop.com/wp-content/themes/sdtattoomob2016/images/headerbg-main.jpg) !important;
}
</style>