
import React from "react";
import IPFS from "ipfs-core";

const IPFS_CALL_DELAY = 5000;

class IPFSPubSub extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          url: ''
        };
      }

    /**
     * [Sets a visitor counter based on IPFS using Esteroids IPFS node]
     */
    async IPFScounter() {

        // connect to ipfs
        const ipfs = await IPFS.create({ repo: 'ipfs-' + Math.random() });
 
        if (ipfs.isOnline()) {

            const node = '/dns4/ipfs.esteroids.xyz/tcp/443/wss/p2p/12D3KooWKrB93pwXDdeyz2WRMwcSBny5ECjA1JasB4GTo4ijUUtf';
            const topic = 'eSteroids';
            
            this.sayHi(ipfs, node, topic);
           
        }
    }

    /**
     * [Uses pubsub to say 'hi' to an IPFS node]
     * @param  {IPFS} node  
     * @param  {string} topic [topic of pubsub room]
     * @param  {string} msg  
     */
    async sayHi(ipfs, node, topic) {
        await ipfs.swarm.connect(node);

        const msg = 'u -' + ( this.state.url || 'na' );

        const msgEncoded = Buffer.from( msg + '\n' );
        setTimeout(() => {
            ipfs.pubsub.publish(topic, msgEncoded);
        }, IPFS_CALL_DELAY);
        
    }

    componentDidMount() {
        try{
            this.setState({url: window.location.href});
        }catch (error){}
        this.IPFScounter();
      
    }

    render() {
    
        return (null); 
    }
}

export  default IPFSPubSub ;