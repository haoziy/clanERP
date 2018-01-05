/**
 * Created by shenqiao on 2017/12/20.
 */
const getAllChannel = function()
{
    return 'SELECT channel_id as channelId,channel_name as channelName  FROM table_channel WHERE channel_active = 1'
}
const addChannel = ()=>{
    return "INSERT INTO `table_channel`" +
        "(`channel_id`, `channel_name`, `channel_descrpition`, `channel_edit_time`, `channel_active`) " +
        "VALUES (?,?,?,NOW(),1) "
}
module.exports = {
    getAllChannel,
    addChannel
}