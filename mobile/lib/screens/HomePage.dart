import 'dart:convert';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/data/event.dart';
import 'package:mobile/widgets/event_card.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _HomePageState createState() => _HomePageState();
}


class _HomePageState extends State<HomePage> {
  int _counter = 0;
  Uri url = Uri.parse(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json");
  late List<Event> events = [];
  var isLoading = false;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    fetchData();
  }

  fetchData() async {
    final response = await http.get(Uri.parse("http://10.0.2.2:3000/events"));
    List list;
    setState(() {
      isLoading = true;
    });
    if (response.statusCode == 200) {
      print(response.body);
      // final body = response.body as List;
      // events = body.map((item)=> Event.fromJson(item));
      setState(() {
        isLoading = false;
      });
    } else {
      throw Exception('Failed to load photos');
    }
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(

        title: Text(widget.title),
      ),
      body: isLoading ? Center(
        child: CircularProgressIndicator(),
      ) : ListView(
        children: events.map((event) => EventCard(event: event)).toList(),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: fetchData,
        tooltip: 'Refresh',
        child: Icon(Icons.refresh),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
