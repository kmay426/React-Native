import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    render() {
        return (
            <ScrollView>
                <Card
                    title="Contact Information"
                    wrapperStyle={{ margin: 20 }}>
                    <Text>1 Nucamp Way</Text>
                    <Text style={{ marginBottom: 10 }}>Seattle, WA  98001</Text>
                    <Text>U.S.A.</Text>
                    <Text>Phone: 1-206-555-1234</Text>
                    <Text>Email: campsites@nucamp.co</Text>
                </Card>
            </ScrollView>
        );
    }
    static navigationOptions = {
        title: 'Contact Us'
    }
}

export default Contact;