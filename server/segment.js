/**
 * Created by shenqiao on 2017/12/29.
 */

 const getAllSegment = ()=>{
    return "SELECT segment_id as segmentId,segment_start as `start`,segment_end as `end`,segment_name as segmentName FROM `table_segment`";
}
const addTimeSegment = ()=>{
    return "INSERT INTO `table_segment`(`segment_id`, `segment_start`, `segment_end`, `segment_name`) VALUES (?, ?, ?, ?)";
}

module.exports = {
    getAllSegment,
    addTimeSegment
}