/**
 * Created by shenqiao on 2017/12/20.
 */
const getAllCustomer = ()=>
{
    return `
    select
    A.customer_id as id,
	A.customer_name as name,
	A.customer_telephone as phone,
	A.customer_deal_state as status,
	A.customer_times as times,
	DATE_FORMAT(A.customer_create_time,'%Y-%m-%d') as date,
	A.customer_intention as intention,
	C.staff_name as staff,
	G.segment_name as segment,
	I.staff_name as inviter,
	K.staff_name as dealer,
	E.channel_name as channel
    FROM
	table_customer A
	LEFT JOIN table_staff_customer_binding B
	ON
	A.customer_id = B.customer_id
	LEFT JOIN table_staff C
	ON  C.staff_id = B.staff_id
	LEFT JOIN table_channel_customer_binding D
	ON D.customer_id = A.customer_id
	LEFT join table_channel E
	ON D.channel_id = E.channel_id
	LEFT JOIN table_segment_customer_binding F
	ON F.customer_id = A.customer_id
	LEFT JOIN table_segment G
	ON G.segment_id = F.segment_id
	LEFT JOIN table_inviter_customer_binding H
	ON H.customer_id = A.customer_id
	LEFT JOIN table_staff I
	ON I.staff_id = H.staff_id
	LEFT JOIN table_dealer_customer_binding J
	ON J.customer_id = A.customer_id
	LEFT JOIN table_staff K
	ON K.staff_id = J.staff_id
	GROUP BY id,staff,channel,segment,inviter,dealer
	ORDER BY A.customer_deal_state,A.customer_create_time DESC
    `
}

const  updateCustomerStatus = ()=>{
    return "UPDATE table_customer A SET A.customer_deal_state = ? WHERE A.customer_id = ?";
}

const bingCustomerAndInviter = ()=>{
    return "INSERT INTO table_inviter_customer_binding " +
        "(`binding_id`, `staff_id`, `customer_id`) " +
        " VALUES(?,?,?)";
}
const bingCustomerAndDealer= ()=>{
    return "INSERT INTO table_dealer_customer_binding " +
        "(`binding_id`, `staff_id`, `customer_id`) " +
        " VALUES(?,?,?)";
}


const addCustomer = ()=>{
    return "INSERT INTO table_customer" +
        "(customer_id,customer_name,customer_telephone,customer_intention,customer_create_time,customer_deal_state,customer_avtive) " +
        "VALUES(?,?,?,?,NOW(),0,1)";
}

const bindCustomerAndChannel = ()=>{
    return "INSERT INTO table_channel_customer_binding " +
        "(`binding_id`, `channel_id`, `customer_id`) " +
        " VALUES(?,?,?)";
}
const bindCustomerAndStaff = ()=>{
    return "INSERT INTO table_staff_customer_binding (binding_id,staff_id,customer_id) " +
        "VALUES(?,?,?)";
}
const bindCustomerAndSegment = ()=>{
    return "INSERT INTO table_segment_customer_binding (binding_id,segment_id,customer_id) " +
        "VALUES(?,?,?)";
}

module.exports = {
    addCustomer,
    getAllCustomer,
    updateCustomerStatus,
    bindCustomerAndSegment,
    bindCustomerAndStaff,
    bindCustomerAndChannel,
    bingCustomerAndInviter,
    bingCustomerAndDealer
}