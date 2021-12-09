import { Input, Select, Space, Cascader } from 'antd';
import { Icon } from '@iconify/react';
import TuneIcon from '@mui/icons-material/Tune';

const ChatHeader = () => {
    const style = {
        chatHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#6588DE',
            height: '90px',
            borderRadius: '14px',
        },

        chatInfo: {
            margin: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },

        chatName : {
            margin: '0px',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#FDFDFE',
        },

        numberOfUser : {
            margin: '0px',
            fontSize: '14px',
            color: '#F2F6F7',
        },

        chatTool : {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            
        },

        tuneIcon: {
            cursor: 'pointer',
        },
    }


    const { Option } = Select;

    const selectBefore = (
        <Select defaultValue="Message">
            <Option value="Message">Message</Option>
            <Option value="User">User</Option>
        </Select>
    );

    return (
        <>
            <div style={style.chatHeader}>
                <div style={style.chatInfo}>
                    <p style={style.chatName}>Nyanpasu</p>
                    <p style={style.numberOfUser}>6 members</p>
                </div>
                <div style={style.chatTool}>
                <Input style={style.input} autoComplete='off' addonBefore={selectBefore} placeholder="Type user or a message you what to search..." />
                <div><TuneIcon style={style.tuneIcon} color='red' /></div>
                </div>
            </div>
        </>
    )
}

export default ChatHeader