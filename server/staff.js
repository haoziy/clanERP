/**
 * Created by shenqiao on 2017/12/21.
 */

addStaff = ()=>{
    return "INSERT INTO  `table_staff`" +
        "(`staff_id`, `staff_name`, `staff_telephone`, `staff_active`) VALUES (?,?,?,1) "
}
getAllStaff = ()=>{
    return `SELECT A.staff_id as staffId,
        A.staff_name as staffName,
        A.staff_telephone as staffTelephone
        FROM table_staff A
        WHERE A.staff_active = 1`
}
module.exports = {
    addStaff,
    getAllStaff
}